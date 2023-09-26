<template>
	<view class="main flex justify-center flex-column align-center">
		<uni-nav-bar backgroundColor="rgba(255,255,255,0)" rightWidth="275rpx" height="120rpx" :statusBar="true"
			:border="false" style="width: 100vw;" @clickLeft="clickLeft">
			<view slot="left">
				<view class="tabmenu">
					<image src="../../static/images/icon4.png" mode="scaleToFill" class="icon"></image>
				</view>
			</view>
			<view slot="right">
				<image src="../../static/images/logo_small.png" mode="scaleToFill" class="icon"></image>
			</view>
		</uni-nav-bar>
		<view class="box">
			<view class="flex justify-center" style="padding: 60rpx 0;">
				<u-tabs :list="list1" @click="click" lineColor="#E31F26" :scrollable="false"
					itemStyle="width:350rpx;height:90rpx"></u-tabs>
			</view>
			<view class="input-box">
				<view class="input flex align-center">
					<image src="../../static/images/icon2.png" mode="scaleToFill" class="icon"></image>
					<uni-easyinput :inputBorder="false" placeholder="请输入旧密码" v-model="old" type="password">
					</uni-easyinput>
				</view>
				<view class="input flex align-center">
					<image src="../../static/images/icon2.png" mode="scaleToFill" class="icon"></image>
					<uni-easyinput :inputBorder="false" placeholder="请输入新密码" v-model="upwd" type="password">
					</uni-easyinput>
				</view>
				<view class="input flex align-center">
					<image src="../../static/images/icon2.png" mode="scaleToFill" class="icon"></image>
					<uni-easyinput :inputBorder="false" placeholder="请重新输入密码" v-model="upwd2" type="password">
					</uni-easyinput>
				</view>
				<view class="btn flex align-center justify-center" @click="save">
					立即重置
				</view>
			</view>
		</view>
		<ds-tabbar :value="4"></ds-tabbar>
	</view>
</template>

<script>
	import DsTabbar from '../../components/ds/ds-tabbar.vue'
	export default {
		data() {
			return {
				old: '',
				upwd: '',
				upwd2: '',
				list1: [{
					name: '登录密码',
				}, {
					name: '提现密码',
				}],
				current: 0
			}
		},
		components: {
			DsTabbar
		},
		mounted() {

		},
		methods: {
			click(item) {
				console.log('item', item);
				this.current = item.index
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			async save() {
				let res = null
				if (this.current == 0) {
					res = await uni.$u.http.post('index/yii/respass.html', {
						uid: this.vuex_login,
						old: this.old,
						upwd: this.upwd,
						upwd2: this.upwd2
					})
				}
				if (this.current == 1) {
					res = await uni.$u.http.post('index/yii/repaypass.html', {
						uid: this.vuex_login,
						old: this.old,
						upwd: this.upwd,
						upwd2: this.upwd2
					})
				}
				console.log(res)
				if (res.type == 1) {
					uni.$u.toast('密码重置成功')
					uni.navigateBack({
						delta: 1
					})
				}
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
		width: 100vw;
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

	.box {
		background-color: #fff;
		border-top-left-radius: 80rpx;
		border-top-right-radius: 80rpx;
		margin-top: auto;
		flex: 1;
		padding: 0 0 0 0;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30rpx;
	}

	.input-box {
		width: 477rpx;
	}

	.input-box .input {
		border: #D7D7D8 1px solid;
		border-radius: 80rpx;
		height: 94rpx;
		padding: 0 30rpx;
		margin-bottom: 28rpx;

	}

	.input-box .input .icon {
		width: 30rpx;
		height: 37rpx;
	}

	.input-box .btn {
		border-radius: 80rpx;
		height: 94rpx;
		background-color: #E31F26;
		color: #ffffff;
		font-size: 40rpx;
		margin-top: 80rpx;
	}

	.input-tip {
		margin-top: 80rpx;
	}
</style>
