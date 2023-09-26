<template>
	<view class="main flex flex-column">
		<uni-nav-bar backgroundColor="rgba(255,255,255,0)" leftWidth="275rpx" height="120rpx" :statusBar="true"
			:border="false" style="width: 100vw;" @clickLeft="clickLeft">
			<view slot="left">
				<image src="../../static/images/logo_small.png" mode="scaleToFill" class="icon"></image>
			</view>
			<view slot="right">
				<view class="tabmenu">
					<uni-icons type="bars" size="18" color="#ffffff"></uni-icons>
				</view>
			</view>
		</uni-nav-bar>
		<view class="user-box flex align-center">
			<view class="avatar">
				<image src="../../static/images/icon6.png" mode="scaleToFill" class="avatar-img"></image>
			</view>
			<view class="info">
				<view class="f16 flex">Loodf Moiuoi <image src="../../static/images/icon7.png" mode="scaleToFill"
						class="vip"></image>
				</view>
				<view class="f12">Loodf Moiuoi</view>
			</view>
		</view>
		<view class="ml15 flex flex-column justify-center mb10">
			<view class="red f20 flex mt10">余额：126.3656</view>
		</view>
		<view class="box">
			<image src="../../static/images/icon14.png" mode="scaleToFill" class="yinhangka"></image>
			<view class="input-box flex flex-column">
				<view class="f15 mt5">姓名：XXX</view>
				<view class="f15 mt5">开户行：</view>
				<view class="f15 mt5">银行卡号：6217******0000</view>
			</view>
			<view class="input-box flex align-center">
				<view class="label">提现金额：</view>
				<view class="input flex align-center">
					<uni-easyinput :inputBorder="false" placeholder="请输入您的提现金额"></uni-easyinput>
					<uni-icons type="bottom" size="18" color="#ffffff"></uni-icons>
				</view>
			</view>

			<view class="btn f20">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			show() {
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}
		}
	}
</script>
<style>
	page {
		background-color: #F7F7F7;
	}
</style>
<style scoped>
	.main {
		min-height: 100vh;
	}

	.main .icon {
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

	.user-box {
		margin: 30rpx;
	}

	.user-box .avatar {
		background-color: #30A165;
		border: #000000 2px solid;
		border-radius: 50%;
		width: 107rpx;
		height: 107rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20rpx;
	}

	.user-box .avatar .avatar-img {
		width: 58rpx;
		height: 75rpx;

	}

	.user-box .info .vip {
		width: 140rpx;
		height: 43rpx;
		margin-left: 10rpx;
	}

	.box {
		background-color: #fff;
		border-top-left-radius: 80rpx;
		border-top-right-radius: 80rpx;
		margin-top: auto;
		flex: 1;
		padding: 30rpx;
	}

	.yinhangka {
		width: 350rpx;
		height: 68rpx;
		margin: 80rpx 30rpx 80rpx auto;
	}

	.input-box {
		margin-bottom: 20rpx;

	}

	.input-box .label {
		font-size: 40rpx;
		margin-right: 20rpx;
	}

	.input-box .input {
		border: #D7D7D8 1px solid;
		border-radius: 80rpx;
		height: 64rpx;
		padding: 0 30rpx;
		width: 300rpx;
		color: #a6abb7;
	}

	.box .btn {
		width: 479rpx;
		height: 94rpx;
		background-color: #E31F26;
		border-radius: 80rpx;
		background-color: #E31F26;
		color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 80rpx auto 0 auto;
	}
</style>
