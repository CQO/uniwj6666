<template>
	<view class="info">
		<!-- <ds-navbar :left="true"></ds-navbar> -->
		<u-navbar :title="$t('info.cp')" placeholder :autoBack="false" leftIcon="">
		</u-navbar>
		<!-- 	<view style="padding:30rpx 0;width: 94%;margin: 0 auto;">
			<u-search placeholder="请输入产品名称" v-model="k" @search="search" @custom="search"></u-search>
		</view> -->
		<!-- <u-gap height="20rpx" bgColor="#efefef"></u-gap> -->
		<view class="">
			<u-tabs :list="category" keyName="pcname" lineColor="#2979ff" @click="getGoods"></u-tabs>
		</view>

		<view class="chanpinmain">
			<view class="chanpinmain_nei">
				<view class="headermain">
					<text class="">
						{{$t('info.mc')}}
					</text>
					<text class="">
						{{$t('info.zxj')}}
					</text>
					<text class="">
						{{$t('info.bf')}}
					</text>
				</view>
				<gal-css-animate :animateName="animateName" duration="1s" timingFunction="ease-in">
					<view class="listmain">
						<view class="everylist" v-for="(item,index) in goods" :key="index" @click="goto(item)">
							<view class="every">
								<view class="mingcheng">
									{{item.ptitle}}
								</view>
								<!--view class="">
									ID: {{item.pid}}
								</view-->
							</view>
							<view class="every">
								<view class="" :class="item.DiffRate < 0 ? 'red' : 'green'">
									{{item.Price}}
								</view>
								<view class="" style='color: #fff;'>
									{{$t('info.zd')}}:{{item.Low}}
								</view>
							</view>
							<view class="every">
								<view class="" :class="item.DiffRate < 0 ? 'red' : 'green'">
									{{item.DiffRate}}%
								</view>
								<view class="" style='color: #fff;'>
									{{$t('info.zg')}}:{{item.High}}
								</view>
							</view>
						</view>
					</view>
				</gal-css-animate>
			</view>
		</view>
		
		<view class="" style='height: 100rpx;'></view>
		<!-- <view class="product">
			<lyy-table headerFixed :contents="goods" :columnFixed="1" :headers="headers" :totalRow="[]"
				@rowClick="rowClick" @onPullup="pullup"></lyy-table>
			<view class="item" v-for="(item,index) in goods" :key="index"  @click="goto(item)">
				<image :src="$imgUrl(item.img)" class="thumb" mode="scaleToFill" v-if="item.img"></image>
				<view class="title">{{item.ptitle}}</view>
			</view>
		</view> -->
		
		<!-- 底部导航栏 -->
		<tabbar :active='1' />
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				animateName: 'jackInTheBox',
				goods: [],
				category: [],
				k: '',
				userinfo: {},
				loading: false,
				headers: [{
					label: '名称',
					key: 'ptitle',
					width: this.upx2px(250),
					align: 'flex-start',
					text_align: 'left'
				}, {
					label: '最新价',
					key: 'Price',
					width: this.upx2px(250),
					color: '#5d5d5d'

				}, {
					label: '波幅',
					key: 'DiffRate',
					width: this.upx2px(250),
					riseColor: '#4e9984',
					fallColor: '#ce0000',
					suffix: "%",
					type: 'fluctuation'
				}],
				timer: null,
				isshow: true,
			}
		},
		components: {
			DsNavbar
		},
		onShow() {
			uni.hideTabBar()
			this.getCategory()
			this.getUserinfo()
			this.setTime()
		},
		onHide() {
		    clearInterval(this.timer)	
		},
		beforeDestroy() {
			clearInterval(this.timer)	
		},
		methods: {
			setTime() {
				if (this.isshow == true) {
					this.timer = setInterval(() => {
						this.getGoods(this.category[0])
					}, 3000)
				}
			},
			async getUserinfo() {
				let res = await uni.$u.http.post('index/yii/user_index.html', {
					uid: this.vuex_login
				})
				this.userinfo = res.data.user
			},
			async search() {
				this.isshow = false
				let res = await uni.$u.http.post('index/yii/prosselect.html', {
					ptitle: this.k
				})
				this.goods = res.data
			},
			async getCategory() {
				let res = await uni.$u.http.post('index/yii/proclass.html')
				this.category = res.data
				this.getGoods(this.category[0])
			},
			async getGoods(item) {
				let res = await uni.$u.http.post('index/yii/prosshow.html', {
					id: item.pcid
				})
				this.goods = res.data
				return
				// let res = await uni.$u.http.post('index/yii/goods.html')
				// console.log(res)
				// this.goods = res.data
			},
			goto(item) {
				//let url= '../buy/index?pid='+ pid
				//console.log(this.userinfo.usermoney,item.money_in)
				if (this.userinfo.usermoney < item.money_in) {
					uni.$u.toast('请保证余额大于' + item.money_in)
					return
				}
				uni.navigateTo({
					url: '../buy/index?pid=' + item.pid
				})
			},
			upx2px(value) {
				//#ifndef MP-WEIXIN
				return uni.upx2px(value) + 'px'
				//#endif
				//#ifdef MP-WEIXIN
				return uni.upx2px(value)
				//#endif
			},
			rowClick(e) {
				console.log(e)
				this.goto(e)
			},
		}
	}
</script>
<style lang="scss" scoped>
	.red {
		color: #cf1b24;
	}
	page, .u-tabs, .info {
		background-color: #000;
	}
	
	/deep/ .u-tabs__wrapper__nav__item__text {
		color: #fff !important;
	}
	.green {
		color: #008000;
	}

	.chanpinmain {
		margin-top: 40rpx;
		background: #000;

		.chanpinmain_nei {
			width: 94%;
			margin: 0 auto;
			padding: 40rpx 0;

			.headermain {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				font-size: 28rpx;
				padding: 0 40rpx;

				text {
					width: 33%;
					text-align: left;
				}
			}

			.listmain {
				padding-top: 40rpx;

				.everylist {
					background: #000;
					padding: 40rpx;
					border-radius: 20rpx;
					margin-bottom: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.every {
						width: 33%;

						view {
							font-size: 28rpx;
							font-weight: 600;

							&:first-child {
								margin-bottom: 30rpx;
							}
						}

						.mingcheng {
							color: #fff;
						}
					}
				}
			}
		}
	}

	.navBar {
		font-size: 30rpx;
		color: #898989;
		background-color: #000;
		padding: 20rpx;
	}

	.product {
		/* display: grid; */
		grid-template-columns: 320rpx 320rpx;
		/* justify-content: space-between; */
		/* grid-row-gap: 20rpx; */
		/* padding: 30rpx; */
		background-color: #000;
		margin-top: 20rpx;
	}

	.product .thumb {
		width: 320rpx;
		height: 320rpx;
		margin-bottom: 20rpx;
	}

	.product .title {
		text-align: center;
		font-size: 32rpx;
	}
</style>
