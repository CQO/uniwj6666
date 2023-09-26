<template>
	<view>
		
		<view class="kline-box">
			<view class="left">
				<!-- <view style="font-size: 30rpx;color: #828095;font-weight: bold;">{{currency_name}}</view> -->
				<view class="vcenter-hcenter" style="width: 710rpx;margin-top: 40rpx;">
					<view class="price">
						{{shishi.now}}
					</view>
					
				</view>
			</view>
		</view>
		<view id="renderKlinechart" :prop="chartData" :change:prop="renderKlinechart.getData" class="content"></view>
		<!-- <view class="chart-box-btn">
			<view :class="{item:true,active:current==index ?true:false}" v-for="(item,index) in times" :key="index"
				@click="selectTime(index)">
				{{item.label}}
			</view>
		</view> -->
		<view class="vcenter-hcenter" style="padding: 30rpx;">
			<view class="hspace_between-vcenter" style="width:690rpx;padding: 30rpx;">
				<view class="hleft-vcenter">
					<view style="font-size: 25rpx;color: #828095;font-weight: bold;">
						{{$t('record2.kp')}}
					</view>
					<view style="margin-left: 10rpx;font-size: 25rpx;color: #a6a6a6;font-weight: bold;">{{shishi.open}}</view>
				</view>
				<view class="hleft-vcenter">
					<view style="font-size: 25rpx;color: #828095;font-weight: bold;">
						{{$t('record2.zg')}}
					</view>
					<view style="margin-left: 10rpx;font-size: 25rpx;color: #a6a6a6;font-weight: bold;">{{shishi.highest}}</view>
				</view>
				<view class="hleft-vcenter">
					<view class="" style="font-size: 25rpx;color: #828095;font-weight: bold;">
						{{$t('record2.zd')}}
					</view>
					<view style="margin-left: 10rpx;font-size: 25rpx;color: #a6a6a6;font-weight: bold;">{{shishi.lowest}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	let base64 = require('../../common/base64.js');
	import {intervals,chartTypes,shapes} from './params'
	export default {
		name: "klinechart",
		props: {
			currency_name: {
				type: String,
				default: ""
			},
			legal_name: {
				type: String,
				default: ""
			},
			pid:{
				type: Number,
				default: 0
			},
			row: {
				type: String,
				default: '40'
			},
			//精度
			precision:{
				type:Number,
				default:4
			}
		},
		data(){
			return {
				//分时
				intervals,
				currentIntervalIndex:0,
				//图标类型
				chartTypes,
				currentChartTypeIndex:0,
				//画图的类型
				shapes,
				//传输给renderjs的数据
				chartData:{
					precision:4,
					historyData:[],//历史数据
					updateData:{},//更新的实时数据
					chartType:null,//更新图表类型
					createShapeName:null
				},
				period:'',
				dataList:[],
				current_type:0,
				current:0,
				times: [{
						label: '1M',
						value: 1
					},
					{
						label: '15M',
						value: 15
					},
					{
						label: '30M',
						value: 30
					},
					{
						label: '1H',
						value: 60
					},
					{
						label: '1D',
						value: 'd'
					}
				],
				shishi:{},
				symbol:'',
				timer:null,
				
			}
		},
		created() {
			//获取历史数据列表
			clearInterval(this.timer)
			this.getHistoryData()
			this.symbol=  this.legal_name
			
		},
		watch: {
		   //监听内容
		   pid() {
			clearInterval(this.timer)
			this.getHistoryData()
		  }
		},
		destroyed(){
			clearInterval(this.timer)
		},
		methods:{
			
			changeType(index){
				this.chartData.chartType = this.chartTypes[index].value
				this.current_type = index
			},
			async getHistoryData(){
				let res = await uni.$u.http.post('index/api/getkdata', {
					pid: this.pid,
					num: 60,
					interval: this.times[this.current].value
				})
				let result = JSON.parse(base64.Base64.decode(res))
				//let data = this.splitData(result.items)
				this.shishi = result.topdata
				this.$emit('getSokcetData',this.shishi)
				let data = []
				for(let i in result.items){
					data.push({
						timestamp: Number(result.items[i][0])*1000,
						open: Number(result.items[i][1]),
						close: Number(result.items[i][2]),
						high:Number(result.items[i][3]),
						low: Number(result.items[i][4]),
						
					})							
				}
				// this.initChart()
				//显示历史数据
				this.chartData.historyData = data	
				clearInterval(this.timer)
				this.setInterl()
				//this.chartData.categories = data.categoryData
				// let values = []
				// for (let i in data.values) {
				// 	values.push(Number(data.values[i][0]))
				// }
			//	this.chartData.series[0]['data'] = data.values
				//this.shishi = result.topdata
				//this.opts.extra.markLine.data[0].value=this.shishi.now 
			},
			setInterl() {
				this.timer = setInterval(() => {
					//index/api/getprodata
					// uni.$u.http.post('index/api/getprodata', {
					// 	pid: this.pid
					// }).then((res)=>{
					// 	let shishi =  JSON.parse(base64.Base64.decode(res)) 
					// 	if(this.symbol!=shishi.now){
					// 		this.symbol = shishi.now
					// 		this.shishi = shishi
					// 	}		
					// })
					this.getHistoryData()
				},3000)
			},
			
			//切换时间
			selectTime(index) {
				this.current = index
				this.getHistoryData()
			},
			//修改图标类型
			changeChartType(index){
				 
				
			},
			//创建图形
			createShape(shape){
				 
			}
		},
	}
</script>
<script module="renderKlinechart" lang="renderjs">
	import {init,dispose} from './klinecharts.min.js'
	import theme from './theme.js' 
	import {rect,circle} from './params'
	import generatedKLineDataList from './generatedKLineDataList.js'
	export default {
		data(){
			return{
				chart:null,
				macd:null
			}
		},
		mounted(){
			this.initChart()
		},
		methods:{
			//初始化图表
			initChart(){
				dispose('renderKlinechart')
				this.chart = init('renderKlinechart')
				//设置黑色主题
				this.chart.setStyleOptions(theme('dark'))
				//在主图上显示MA折线
				this.chart.createTechnicalIndicator({
					name: 'MA',
					calcParams:[5, 10,30],
				}, false, {
					id: 'candle_pane'
				})
				//显示总量图
				// this.chart.createTechnicalIndicator({
				// 	name: 'VOL',
				// 	calcParams:[20, 30],
				// }, false, {
				// 	height: 100,
				// 	dragEnabled: false
				// })
				//显示MACD图
				this.macd = this.chart.createTechnicalIndicator('MACD', false, {
					height: 100,
					dragEnabled: false
				})
				 this.chart.overrideTechnicalIndicator({
					name:'MACD',
				})
				//this.chart.applyNewData(generatedKLineDataList())
				
			},
			getData(newValue, oldValue){
				console.log(newValue, oldValue)
				// //设置历史数据
				if(newValue.historyData){
					this.chart.clearData()
					this.chart.applyNewData(newValue.historyData)
				}
				// //更新实时数据
				if(newValue.updateData){
					this.chart.updateData(newValue.updateData)
				}
				//修改图表类型
				if(newValue.chartType){
					this.chart.setStyleOptions({
						candle: {
							type:newValue.chartType
						}
					})
				}
				//
			
				//设置精度
				this.chart.setPriceVolumePrecision(newValue.precision,newValue.precision)
			}
		},
		beforeDestroy() {
			// if(this.chart){
				
			// 	dispose('renderKlinechart')
			// }
		}
		
		
	}
</script>


<style lang="scss" scoped>
	.kline-box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120rpx;
	}
	.kline-box .left{
		padding: 20rpx;
	}
	.kline-box .price{
		color: #0ecb80;
		font-size: 80rpx;
		font-weight: bold;
	}
	.kline-box .item{
		display: flex;
		align-items: center;
		 
	}
	.kline-box .type{
		display: flex;
		justify-content: space-between;				
		
	}
	.kline-box .type .item{
		border-radius:20px;
		font-size: 12px;
		padding: 2px 10px;
		margin: 0 10rpx;
	}
	.kline-box .type .item.current{
		background-color: #1c5699;
		color: #fff;
	}
	.content {
		margin-top: 50rpx;
		width: 750rpx;
		height: 600rpx;
		position: relative;
		z-index: 1;
	}

	body {
		margin: 0;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #F2F3F5;
	}

	div,
	p {
		box-sizing: border-box;
	}

	p {
		margin: 0;
	}

	.app {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		padding: 15px;
	}

	.k-line-chart-container {
		display: flex;
		flex-direction: column;
		margin: 15px;
		border-radius: 2px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
		background-color: #FFFFFF;
		width: 620px;
		height: 440px;
		padding: 16px 6px 16px 16px;
	}

	.k-line-chart-title {
		margin: 0;
		color: #252525;
		padding-bottom: 10px;
	}

	.k-line-chart {
		display: flex;
		flex: 1;
	}

	.k-line-chart-menu-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10px;
		font-size: 12px;
		color: #606060;
	}

	.k-line-chart-menu-container button {
		cursor: pointer;
		background-color: #2196F3;
		border-radius: 2px;
		margin-right: 8px;
		height: 24px;
		line-height: 26px;
		padding: 0 6px;
		font-size: 12px;
		color: #fff;
		border: none;
		outline: none;
	}
	
	.options{
		border-top: 2rpx solid #333;
		border-bottom: 2rpx solid #333;
		display: grid;
		grid-template-columns:repeat(2,1fr);
		color: #999;
		.item{
			position: relative;
			padding:16rpx 0;
			line-height: 40rpx;
			&::after{
				display: block;
				content: "";
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				width: 2rpx;
				background: #333;
			}
			
		}
	}
	
	.chart-box-num {
		display: flex;
		justify-content: space-around;
		width: 100vw;		
		margin-bottom: 30rpx;
		margin-top: 30rpx;
	}
	.pdesc{
		margin-top: 30rpx;
		margin-bottom: 30rpx;	 
		white-space: normal;
		width: 710rpx;
		padding-bottom: 100px;
		font-size: 14px;
		margin: 0 auto;
		word-break:break-all;
	}
	.chart-box-num .item {
		border-right: #aaa 1px solid;
		width: 30%;
		text-align: center;
	}
	
	.chart-box-num .item:last-child {
		border-right: none;
	}
	
	.chart-box-btn {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 60rpx;
	}
	
	.chart-box-btn .item.active {
		color: #1c5699;
		border-bottom: #1c5699 2px solid;
	}
</style>
