<template>
	<view class="main">
		<ds-navbar :left="true"></ds-navbar>
		<swiper :indicator-dots="true" indicator-active-color="#E31F26" class="swiper">
			<swiper-item>
				<image src="../../static/images/lb01.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/lb02.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/lb03.png"></image>
			</swiper-item>
		</swiper>
		<view class="notice">
			<uni-icons type="notification-filled" size="36" color="#E31F26" style="margin-left: 20rpx;"></uni-icons>
			<uni-notice-bar color="#333333" background-color="rgba(255,255,255,0)" :single="true" :text="notice"
				scrollable style="margin: 0;"></uni-notice-bar>
		</view>

		<view class="category-box">
			<navigator class="item" hover-class="none" url="">走进片仔癀</navigator>
			<navigator class="item" hover-class="none" url="../news/index">新闻中心</navigator>
			<navigator class="item" hover-class="none" url="../buy/index">产品及服务</navigator>
		</view>
		<view class="category-nav">
			<view class="f20">新闻中心</view>
			<u-divider text="NEWS CENTER"></u-divider>
		</view>
		<view class="ul">
			<navigator class="li" v-for="(item,index) in lists" :key="index" hover-class="none"
				:url="'../news/show?id='+item.nid">
				<view class="date">
					<text class="f16 month">{{$u.timeFormat(item.ntime, 'mm')}}</text>
					<view class="line"></view>
					<text class="f16 day">{{$u.timeFormat(item.ntime, 'dd')}}</text>
				</view>
				<text class="title">{{item.ntitle}}</text>
			</navigator>
		</view>
		<uni-popup ref="drawer" type="right">
			<view class="drawer">
				<view style="height: 120rpx;"></view>
				<view class="item">首页</view>
				<view class="item">公司简介</view>
				<view class="item">新闻资讯</view>
				<view class="item">个人中心</view>
				<view class="item">联系我们</view>
				<image src="../../static/images/logo_gray.png" mode="widthFix" class="drawer-logo"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				current: 0,
				info: [],
				notice: '',
				lists: [],
				swiper1: [],
				swiper2: []
			}
		},
		components: {
			DsNavbar
		},
		mounted() {
			//uni.clearStorage()
			this.getLists()
			this.getNotice()
			this.getSwiper()
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			async getLists() {
				let res = await uni.$u.http.post('index/yii/newsinfo.html')
				console.log(res)
				this.lists = res.data[0]
				this.swiper1 = res.data[1]
				this.swiper2 = res.data[2]
				this.swiper2.forEach((item) => {
					this.info.push({
						content: item.ntitle
					})
				})
			},
			async getSwiper() {
				let res = await uni.$u.http.post('index/yii/swiper.html')
				this.swiper1 = res.data
			},
			async getNotice() {
				let res = await uni.$u.http.post('index/yii/noticeinfo.html')
				console.log(res)
				this.notice = res.data[0].ntitle
			}
		}
	}
</script>

<style scoped>
	.main {
		min-height: 100vh;
	}


	.swiper {
		width: 700rpx;
		border-radius: 20rpx;
		overflow: hidden;
		height: 360rpx;
		margin: 0 auto;
	}

	.swiper image {
		width: 700rpx;
		height: 360rpx;
	}

	.swiper2 {
		width: 650rpx;
		height: 360rpx;
		margin: 0 auto;
	}

	.swiper2 image {
		width: 650rpx;
		height: 360rpx;
	}

	.notice {
		width: 700rpx;
		border-radius: 20rpx;
		margin: 30rpx auto;
		overflow: hidden;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 10rpx 0;
	}

	.category-box {
		width: 700rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
	}

	.category-box .item {
		width: 32%;
		height: 82rpx;
		background-color: #E31F26;
		color: #fff;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.category-nav {
		margin: 60rpx 30rpx 0 30rpx;
		text-align: center;

	}

	.category-nav .f20 {
		font-size: 64rpx;
	}

	.ul {
		padding: 0 20rpx;
	}

	.ul .li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
		height: 140rpx;
	}

	.ul .li:last-child {
		border-bottom: none
	}

 

	.ul .li .date {
		position: relative;
		width: 140rpx;
		height: 140rpx;
	}

	.ul .li .date .month {
		position: absolute;
		top: 30rpx;
		left:20rpx;
	}

	.ul .li .date .day {
		position: absolute;
		bottom: 20rpx;
		right:20rpx;
	}

	.ul .li .date .line {
		position: absolute;
		border-bottom: #D8CA9E 1px solid;
		transform: rotate(-45deg);
		left:5%;
		width:90%;
		top: 55%;
	}

	.ul .li .title {
		flex: 1;
		margin-left:20rpx;
		font-size: 16px;
	}
</style>
