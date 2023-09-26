<template>
	<view class="main">
		<!-- <ds-navbar :left="true"></ds-navbar> -->
		<u-navbar :title="$t('shouyi.rxb')" placeholder :autoBack="true" leftIconColor='#fff'>
		</u-navbar>
		<view class="headermain">
			<view class="headermain_nei">
				<view class="minheadermain">
					<view class="tongji flex flex-column justify-center">
						<view class="f14 flex justify-center">{{$t('shouyi.zje')}}</view>
							<view class="red f20 flex justify-center mt10">￥{{user.lixibao}}</view>
						</view>
						<view class="tongji flex flex-column justify-center">
							<view class="f14 flex justify-center">{{$t('shouyi.mrsy')}}</view>
							<view class="red f20 flex justify-center mt10">￥{{lixi1}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="box1">
			<!-- <view class="flex justify-between mtb10">
				<text class="f15">每日收益</text>
				<text class="f15">{{lixi1}}元</text>
			</view> -->
			<view class="cell f15" @click="$refs.zhuanru.open()">
				<view class="img ml10">
					<image src="../../static/images/icon12.png" mode="scaleToFill" class="img-icon"></image>
				</view>
				<view class="title">
					{{$t('shouyi.cr')}}
				</view>
				<view class="mr10">
					{{$t('shouyi.rlx')}}：{{lixi}}%
				</view>
			</view>
			<view class="cell f15" @click="$refs.quchu.open()">
				<view class="img ml10">
					<image src="../../static/images/icon13.png" mode="scaleToFill" class="img-icon"></image>
				</view>
				<view class="title">
					{{$t('shouyi.qc')}}
				</view>
				<view class="mr10">
					{{$t('shouyi.ljsy')}}{{user.profit}}
				</view>
			</view>
			<view class="record">
				<!-- <view class="record-title">收益记录</view> -->
				<view class="record-title">
					<u-tabs :list="list1" lineWidth="40" :inactiveStyle="{color: '#fff'}" :activeStyle="{color: '#fff'}"></u-tabs>
				</view>
				<view class="list" v-for="(item,index) in rows" :key="index">
					<view class="item">
						<view>{{$t('shouyi.sj')}}</view>
						<view>{{$t('shouyi.drsy')}}</view>
					</view>
					<view class="item">
						<view>{{$u.timeFormat(item.time, 'yyyy-mm-dd')}}</view>
						<view>{{$t('shouyi.sy')}} {{item.money}}</view>
					</view>
				</view>
				<view class="" v-if="rows.length == 0">
					<u-empty mode="data" :text='$t("shouyi.sjwl")'icon="../../static/images/data.png">
					</u-empty>
				</view>
				<!-- <view class="list" v-for="i in 6">
					<view class="item">
						<view>时间</view>
						<view>当日收益</view>
					</view>
					<view class="item">
						<view>111111</view>
						<view>收益 123</view>
					</view>
				</view> -->
			</view>
		</view>
		<!-- <ds-tabbar :value="2"></ds-tabbar> -->
		<uni-popup ref="zhuanru" type="dialog">
			<uni-popup-dialog mode="input" :title="$t('shouyi.qsrzrje')" :duration="2000" :before-close="true" @close="close"
				@confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="quchu" type="dialog">
			<uni-popup-dialog mode="input" :title="$t('shouyi.qsrzcje')" :duration="2000" :before-close="true" @close="close2"
				@confirm="confirm2"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	import DsTabbar from '../../components/ds/ds-tabbar.vue'
	export default {
		data() {
			return {
				lists: [],
				rows: [],
				user: {},
				lixi: '',
				lixi1: '',
				list1: [{
					name: this.$t('shouyi.syjl'),
				}, ],
			}
		},
		onShow() {
			this.getDetail()
		},
		components: {
			DsNavbar,
			DsTabbar
		},
		methods: {
			async getDetail() {
				let res = await uni.$u.http.post('index/yii/lixibao.html', {
					uid: this.vuex_login
				})
				this.user = res.data.user
				this.lixi = res.data.lixi
				this.lixi1 = res.data.lixi1
				this.rows = res.data.rows
			},
			close() {
				this.$refs.zhuanru.close()
			},
			confirm(e) {
				console.log(e)
				if (!uni.$u.test.number(e)) {
					uni.$u.toast(this.$t('shouyi.jebzq'))
					return
				}
				uni.$u.http.post('index/yii/lixibao_in.html', {
					uid: this.vuex_login,
					money: e
				}).then((res) => {
					if (res.type == 1) {
						uni.$u.toast(res.msg)
						this.$refs.zhuanru.close()
						this.getDetail()
					}
				})
			},
			close2() {
				this.$refs.quchu.close()
			},
			confirm2(e) {
				console.log(e)
				if (!uni.$u.test.number(e)) {
					uni.$u.toast(this.$t('shouyi.jebzq'))
					return
				}
				uni.$u.http.post('index/yii/lixibao_out.html', {
					uid: this.vuex_login,
					money: e
				}).then((res) => {
					if (res.type == 1) {
						uni.$u.toast(res.msg)
						this.$refs.quchu.close()
						this.getDetail()
					}
				})
			},
		}
	}
</script>
<style>
	page {
		background-color: #000;
	}
</style>
<style lang="scss" scoped>
	/deep/ .uni-popup-dialog {
		background: #fff;
	}
	.headermain {
		background: #000;
		margin-bottom: 30rpx;
		border-radius: 0 0 20rpx 20rpx;

		.headermain_nei {
			width: 94%;
			margin: 0 auto;

			.minheadermain {
				width: 60%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.tongji {
					height: 160rpx;

					view {
						&:first-child {
							color: #fff;
							font-size: 30rpx;
						}

						&:last-child {
							color: #888;
							font-size: 40rpx;
						}
					}
				}
			}
		}
	}

	.main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}




	.box1 {
		background-color: #000;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: auto;
		flex: 1;
		padding: 30rpx;
	}

	.cell {
		width: auto;
		height: 110rpx;
		color: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 30rpx auto;
		background: linear-gradient(to top right, #409eff, #2979ff);
	}

	.cell .title {
		flex: 1;
		margin-left: 20rpx;
	}

	.cell .img {
		height: 68rpx;
		width: 68rpx;
		background-color: #000;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cell .img image {
		width: 36rpx;
		height: 41rpx;
	}

	.record {
		margin-top: 60rpx;
	}

	.record .record-title {
		text-align: center;
		font-size: 30rpx;
		font-weight: 400;
		color: #fff;
		// border-bottom: #BDC1CA 1px solid;
		padding-bottom: 20rpx;
		display: flex;
		justify-content: center;
	}

	::v-deep .u-tabs__wrapper__nav__item__text {
		font-size: 30rpx;
	}

	.record .list {
		color: #000;
		margin-bottom: 40rpx;
		background: #f3f3f3;
		padding: 30rpx;
		border-radius: 20rpx;
	}

	.record .list .item {
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;

		&:first-child {
			margin-top: 0;
		}
	}
</style>
