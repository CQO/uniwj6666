<template>
	<view class="main">
		<view class="title">{{detail.title}}</view>
		<view  class="desc"></view>
		<view class="content">
			<u-parse :content="detail.content"></u-parse>
		</view>
		
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		components: {
			DsNavbar
		},
		onLoad(option) {
			this.id = option.id
		},
		onShow() {
			this.getDetail()
		},
		methods: { 
			async getDetail() {
				// let res = await uni.$u.http.post('index/yii/newsshow.html',{
				// 	id:this.id
				// })
				// this.detail = res.data 
				// var that = this
				// var xhr = new XMLHttpRequest();
				// xhr.addEventListener("readystatechange", function() {
				// 	if (this.readyState === 4) {
				// 		that.detail = JSON.parse(this.responseText)
				// 		console.log(JSON.parse(this.responseText))
				// 	}
				// });
				// xhr.open("GET",
				// 	"https://wp.yanshiba.top/index/api/xq?id="+that.id);
				// xhr.send();
				let res = await uni.$u.http.get('index/api/xq?id='+this.id,{})
				this.detail = res 
			} 
		}
	}
</script>
<style>
	 
</style>
<style lang="scss" scoped>
	.main {
		min-height: 100vh;
	}
	.title{
		margin: 20rpx;
		font-size:40rpx;
		font-weight: bold;
		text-align: center;
		color: #000;
	}
	.content{
		margin:0 20rpx;
		word-break: break-all;
		word-wrap: break-word;
		padding: 40rpx 0;
		::v-deep img{
			max-width: 100%;
		}
	}
 
</style>
