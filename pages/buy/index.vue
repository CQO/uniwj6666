<template>
	<view class="buy">
		<!-- <ds-navbar :left="true"></ds-navbar> -->
		<!-- <view class="nav-title">
			{{pro.ptitle}}
		</view>
		<view class="num-box">
			<view class="f18"><text class="f12">$</text>{{shishi.now}}</view>
		 
		</view> -->
		<u-navbar :title="$t('record2.cpxq')" placeholder :autoBack="true" leftIconColor='#fff'>
		</u-navbar>
		<klinechart :currency_name="pro.ptitle" :legal_name='pro.Price' :pid="pid" @getSokcetData="getSokcetData">
		</klinechart>
		<!-- <view class="chart-box-btn">
			<view :class="{item:true,active:current==index ?true:false}" v-for="(item,index) in times" :key="index"
				@click="selectTime(index)">
				{{item.label}}
			</view>
		</view>
		<view class="chart-box-num">
			<view class="item">
				开盘
				<view>{{shishi.open}}</view>
			</view>
			<view class="item">
				最高
				<view>{{shishi.highest}}</view>
			</view>
			<view class="item">
				最低
				<view>{{shishi.lowest}}</view>
			</view>
		</view> -->
		<view class="pdesc">
			{{pro.pdesc}}
		</view>
		<view class="navbar">
			<navigator hover-class="none" url="/pages/my/record2">
			{{$t('record2.ccmx')}}
			</navigator>
			<view class="btn-green" @click="select(0)">
				<view class="">
					{{$t('record2.mz')}}
				</view>
				<view class="">
					{{shishi.now}}
				</view>
			</view>
			<view class="btn-red" @click="select(1)">
				<view class="">
					{{$t('record2.md')}}
				</view>
				<view class="">
					{{shishi.now}}
				</view>
			</view>
		</view>
		<!-- <ds-tabbar :value="1"></ds-tabbar> -->
		<view class="popupbuy">
			<u-popup :show="popup" :round="10" mode="center" @close="popup = false" closeable>
				<view class="form1">
					<view class="form-title" style="justify-content: center;">
						<view class="f18">
							{{$t('record2.zhye')}}
							：{{userinfo.usermoney}}</view>
					</view>
					<view class="form-title">
						<view class="f18">
							{{$t('record2.dqsj')}}
						</view>
					</view>
					<view class="scrollview">
						<scroll-view scroll-x>
							<view class="input-box">
								<view :class="{item1:true,active:active1==index?true:false}" @click="getTime(index)"
									v-for="(item,index) in protime" :key="index">
									<view>
										{{$t('record2.jssj')}}
									</view>
									<view style="font-size: 32rpx;">{{item*60}}s</view>
									<view class="bottom">{{$t('record2.shouyi')}}
									{{proscale[index]}}%</view>
								</view>
							</view>
						</scroll-view>
					</view>

					<view class="form-title">
						<view class="f18">
							{{$t('record2.xdje')}}
						</view>
					</view>
					<view class="scrollview">
						<scroll-view scroll-x>
							<view class="input-box" style="display: flex;flex-wrap: wrap;">
								<view :class="{item2:true,active:active2==index?true:false}" @click="getMoney(index)"
									v-for="(item,index) in pay_choose_arr" :key="index">
									￥{{item}}
								</view>
								<view :class="{item2:true,active:active2==100?true:false}" @click="getMoney(100)">
									{{$t('record2.qtje')}}
								</view>
							</view>
						</scroll-view>
					</view>
				 <view class="input-box" style="margin-top: 20rpx;"  @click="getMoney(100)">
					<!-- <view class="input-box" style="margin-top: 20rpx;" > -->
						<u--input :placeholder="$t('record2.qsrxdje')" border="surround" v-model="money" clearable></u--input>
					</view>



					<view class="input-box">
						<view class="flex align-center justify-center" style="margin: 50rpx;">
							<u-button type="primary" text="" @click="save" size="large"
								style="letter-spacing: 2rpx;">
								{{$t('record2.ljxd')}}
							</u-button>
						</view>
					</view>
				</view>
			</u-popup>


		</view>

		<u-popup :show="popup2" :round="10" mode="center" @close="popup2 = false" closeable>
			<view class="form vcenter-hcenter"
				style="width: 650rpx;height:inherit;padding:25rpx;background-color: #000;border-radius: 25rpx;">
				<iCircle :percent="percent" :size="200" :stroke-color="color" BgId="BgId" InId="InId">
					<view v-if="percent == 0" :style="{color:thisOrder.ploss > 0 ? '#00bb00':'#ff0000'}"
						style="font-size:24px; ">
						{{thisOrder.ploss}}
					</view>
					<view v-else class="vcenter-hcenter">
						<text style="font-size:24px; color: #606266;">
							<!-- {{ percent }} -->
							{{countdown}}
						</text>
						<view class="vcenter-hcenter" style="height: 50rpx;">
							<view style="color: #4b5461;font-size: 20rpx;">
								{{$t('record2.xjg')}}
							</view>
							<view style="color: #f00;font-size: 20rpx;line-height: 20rpx;">
								{{shishi.now}}
							</view>
						</view>
					</view>

					<view slot="canvas">
						<canvas class="CanvasBox strokeCanvas" canvas-id="BgId"></canvas>
						<canvas class="CanvasBox trailCanvas" canvas-id="InId"></canvas>
					</view>
				</iCircle>
				<view style="padding: 20rpx;border-top: 1px solid #f8f8f8;">
					<view class="hspace_between-vcenter" style="width:580rpx;padding: 30rpx;">
						<view class="hleft-vcenter">
							<view style="font-size: 25rpx;color: #3f4954;font-weight: bold;">
								{{$t('record2.cp')}}
							</view>
							<view style="margin-left: 10rpx;font-size: 25rpx;color: #606266;font-weight: bold;">
								<!-- {{goods[current].ptitle}} -->
								<!-- <text v-if="goods[current] && goods[current].ptitle">{{goods[current].ptitle}}</text> -->
								<text>{{pro.Name}}</text>
							</view>
						</view>
						<view class="hleft-vcenter">
							<view style="font-size: 25rpx;color: #3f4954;font-weight: bold;">
								{{$t('record2.fx')}}
							</view>
							<view style="margin-left: 10rpx;font-size: 25rpx;color:#606266;font-weight: bold;">
								{{order.order_type == 0? $t('record2.mz'):$t('record2.md')}}
							</view>
						</view>
						<view class="hleft-vcenter">
							<view class="" style="font-size: 25rpx;color: #3f4954;font-weight: bold;">
								{{$t('record2.sy')}}
							</view>
							<view style="margin-left: 10rpx;font-size: 25rpx;color: #606266;font-weight: bold;">
								{{proscale[active1]}}%
							</view>
						</view>
					</view>
				</view>
				<view class="vcenter-hcenter" style="align-items: unset;">
					<u-button type="primary" text="" @click="continueOrder">
						{{$t('record2.jxxd')}}
					</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	import DsTabbar from '../../components/ds/ds-tabbar.vue'
	import area from '../../common/opts.js'
	import iCircle from '@/components/xiaoran-circle/xiaoran-circle.vue';
	let base64 = require('../../common/base64.js');
	export default {
		data() {
			return {
				current: 0,
				pid: 0,
				active1: 0,
				active2: 0,
				money: '',
				protime: [],
				proscale: [],
				userinfo: [],
				pay_choose_arr: [],
				order: {
					uid: 0,
					order_type: 0,
					order_pid: 0,
					order_price: 0,
					order_sen: 0,
					order_shouyi: 0,
					order_kuishun: 0,
					newprice: 0
				},
				pro: {},
				chartData: {
					categories: [],
					series: [],
				},
				opts: {},
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
				timer: null,
				shishi: {},
				percent: 100,
				countdown: '',
				day: '',
				time: '',
				minute: '',
				second: '',
				timer: null, //重复执行
				goodOid: null,
				endtime: 0,
				thisOrder: {},
				popup: false,
				popup2: false,
				isjieliu: true,
			}
		},
		components: {
			DsNavbar,
			DsTabbar,
			iCircle
		},
		onLoad(option) {
			this.opts = area.opts
			this.pid = option.pid
			this.chartData = {
				"categories": [],
				"series": [{
					"name": "",
					"data": []
				}]
			}
		},
		onShow() {
			if (this.vuex_login == 0) {
				uni.navigateTo({
					url: '/pages/my/login'
				})
				return
			}
			this.getProtime()
			this.getProduct()
			this.$refs.popup2.open()
			//this.getChartData()
		},
		onUnload() {
			clearInterval(this.timer)
		},
		onHide() {
			clearInterval(this.timer)
			console.log(1)
		},
		methods: {
			showtime(endtime) {
				var nowtime = new Date() //获取当前时间 //定义结束时间
				if (endtime) {
					var lefttime = endtime - Math.floor(nowtime.getTime() / 1000) //计算秒数
					this.countdown = Math.floor(lefttime); //返回倒计时的字符串
					this.percent = Math.floor(this.countdown / (this.protime[this.active1] * 60) * 100)
					console.log(Math.floor(this.countdown / (this.protime[this.active1] * 60) * 100))
					if (this.countdown < 0) {
						this.countdown = 0
						this.percent = 0
						clearInterval(this.timer)
					}
				}

			},
			async getOrder() {
				let res = await uni.$u.http.post(
					'index/yii/get_this_order.html', {
						oid: this.goodOid
					})
				var data = JSON.parse(Base64.decode(res))
				this.thisOrder = data
				this.showtime(data.endtime)
			},
			continueOrder() {

				this.popup2 = false
				clearInterval(this.timer)


			},
			selectTime(index) {
				this.current = index
				this.getChartData()
			},
			async getChartData() {
				let res = await uni.$u.http.post('index/api/getkdata', {
					pid: this.pid,
					num: 60,
					interval: this.times[this.current].value
				})
				let result = JSON.parse(base64.Base64.decode(res))
				let data = this.splitData(result.items)

				this.chartData.categories = data.categoryData
				// let values = []
				// for (let i in data.values) {
				// 	values.push(Number(data.values[i][0]))
				// }
				this.chartData.series[0]['data'] = data.values
				this.shishi = result.topdata
				this.opts.extra.markLine.data[0].value = this.shishi.now

			},
			setInterl() {
				this.timer = setInterval(() => {
					//index/api/getprodata
					uni.$u.http.post('index/api/getprodata', {
						pid: this.pid
					}).then((res) => {
						let shishi = JSON.parse(base64.Base64.decode(res))
						console.log(shishi)
						if (this.shishi.now != shishi.now) {
							this.shishi = shishi
							this.opts.extra.markLine.data[0].value = this.shishi.now
						}
					})
				}, 3000)
			},
			async getUserinfo() {
				let res = await uni.$u.http.post('index/yii/user_index.html', {
					uid: this.vuex_login
				})
				console.log(res)
				this.userinfo = res.data.user
				this.mybank = res.data.data.mybank
				this.level = res.data.level
			},
			async getProduct() {
				let res = await uni.$u.http.post('index/yii/goods_show.html', {
					pid: this.pid
				})
				this.pro = res.data.pro

			},
			async getProtime() {
				let res = await uni.$u.http.post('index/yii/goods_time.html', {
					pid: this.pid
				})
				this.protime = res.data.protime
				this.proscale = res.data.proscale
				this.pay_choose_arr = res.data.pay_choose_arr

			},
			getTime(index) {
				this.active1 = index
			},
			getMoney(index) {
				this.active2 = index
			},
			select(type) {
				this.getUserinfo()
				this.popup = true
				this.order.order_type = type
			},
			getSokcetData(e) {
				console.log(e)
				this.shishi = e
			},
			async save() {
				var that = this
				if (this.isjieliu == false) {
					uni.showToast({
						icon: "none",
						title: this.$t('record2.qwcfxd'),
					})
					return false
				}
				if (this.isjieliu == true) {
					this.isjieliu = false
					setTimeout(function() {
						that.isjieliu = true
					}, 3000);
				}
				this.order.uid = this.vuex_login
				this.order.order_pid = this.pid
				if (this.active2 == 100) {
					this.order.order_price = this.money
				} else {
					this.order.order_price = this.pay_choose_arr[this.active2]
				}
				this.order.order_sen = this.protime[this.active1] * 60
				this.order.order_shouyi = this.proscale[this.active1]
				this.order.order_kuishun = this.order.order_shouyi
				this.order.newprice = this.shishi.now
				let res = await uni.$u.http.post('index/yii/addorder.html', this.order)
				console.log(res)
				if (res.type == 1) {
					var data = JSON.parse(Base64.decode(res.msg))
					this.goodOid = data.oid
					uni.$u.toast(this.$t('record2.xdcg'))
					this.popup = false
					this.popup2 = true
					this.timer = setInterval(() => {
						this.getOrder()
					}, 1000)
				}
			},
			splitData(rawData) {
				var categoryData = [];
				var values = []
				for (var i = 0; i < rawData.length; i++) {
					categoryData.push(this.getDateHM(rawData[i].splice(0, 1)[0]));
					values.push(rawData[i])
				}
				return {
					categoryData: categoryData,
					values: values
				};
			},
			getDateHM(tm) {
				let NWh = new Date(parseInt(tm) * 1000).getHours(tm);
				let NWm = new Date(parseInt(tm) * 1000).getMinutes(tm);
				if (NWh < 10) {
					NWh = "0" + NWh;
				}
				if (NWm < 10) {
					NWm = "0" + NWm;
				}
				let tt = NWh + ":" + NWm
				return tt;
			}
		}
	}
</script>
<style>
	page {
		background-color: #000;
		color: #fff !important;
	}
</style>
<style lang="scss" scoped>
	.popupbuy {
		::v-deep .u-popup__content {
			width: 90%;
			margin: 0 auto;
		}
	}

	.buy {
		background: #000;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		width: 100vw;
	}

	.buy .icon {
		width: 275rpx;
		height: 87rpx;
	}

	.tabmenu {
		background-color: #E31F26;
		width: 65rpx;
		height: 65rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tabmenu .icon {
		width: 30rpx;
		height: 30rpx;
	}

	.scrollview {
		/* margin: 0 40rpx; */
		// width: 710rpx;
	}

	.form1 {
		// background-color: #000;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 0 40rpx;
		padding-top: 50rpx;
		color: #000 !important;
	}

	.form1 .form-title {
		display: flex;
		justify-content: space-between;
		padding: 40rpx 0 0 0;
		color: #fff;
		font-weight: 600;
		color: #000;
	}

	.form1 .input-box {
		margin: 0;
		white-space: nowrap;
	}

	.form1 .input-box .item1 {
		display: inline-flex;
		text-align: center;
		border-radius: 12rpx;
		width: 190rpx;
		box-sizing: border-box;
		border: #f8f8f8 2px solid;
		overflow: hidden;
		flex-direction: column;
		margin-right: 30rpx;
		padding: 0rpx 0;
		font-size: 28rpx;
		margin-top: 20rpx;
	}

	.form1 .input-box .item1 .bottom {
		background-color: #b7b3b3;
		padding: 5rpx 10rpx;
	}

	.form1 .input-box .item1.active {
		/* border: #E31F26 2px solid; */
		background: #2979ff;
		color: #000;
	}

	.form1 .input-box .item2 {
		text-align: center;
		border-radius: 8rpx;
		padding: 20rpx;
		box-sizing: border-box;
		overflow: hidden;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 30rpx;
		font-size: 28rpx;
		margin-top: 20rpx;
	}

	.form1 .input-box .item2.active {
		background: #2979ff;
		color: #000;
	}

	.form1 .input-box .btn {
		border-radius: 80rpx;
		height: 94rpx;
		background-color: #E31F26;
		color: #000;
		font-size: 40rpx;
		margin: 50rpx;
	}

	.form1 .input-box-wrap {
		flex-wrap: wrap;
	}

	.nav-title {
		color: #E31F26;
		margin: 20rpx;
	}

	.chart-box {
		width: 100%;
		height: 480rpx;
		margin-top: 60rpx;
	}

	.chart-box-num {
		display: flex;
		justify-content: space-around;
		width: 100vw;
		margin-bottom: 30rpx;
		margin-top: 30rpx;
	}

	.pdesc {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		white-space: normal;
		width: 710rpx;
		padding-bottom: 150px;
		font-size: 14px;
		margin: 0 auto;
		word-break: break-all;
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
		color: #E31F26;
		border-bottom: #E31F26 2px solid;
	}

	.num-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.navbar {
		display: flex;
		justify-content: space-around;
		background-color: #000;
		/* position: fixed;
		bottom: 50px;
		width: 100vw; */
		align-items: center;
		padding: 20rpx 0;
		position: fixed;
		bottom: 0;
		width: 100vw;
		/* 	z-index: 99999; */
	}

	.navbar .btn-red {
		width: 242rpx;
		height: 81rpx;
		border-radius: 14rpx;
		color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #c41a1f;
		font-size: 24rpx;
		flex-direction: column;
	}

	.navbar .btn-green {
		width: 242rpx;
		height: 81rpx;
		border-radius: 14rpx;
		color: #000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #3EA971;
		font-size: 24rpx;
	}

	.CanvasBox {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
