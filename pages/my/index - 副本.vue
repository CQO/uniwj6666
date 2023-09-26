<template>
	<view class="main">
		<!-- <uni-nav-bar backgroundColor="rgba(255,255,255,0)" leftWidth="275rpx" height="120rpx" :statusBar="true"
			:border="false" style="width: 100vw;" @clickLeft="clickLeft" @clickRight="clickRight">
			<view slot="left">
				<image src="../../static/images/logo_small.png" mode="scaleToFill" class="logo"></image>
			</view>
			<view slot="right">
				<image src="../../static/images/icon5.png" mode="scaleToFill" class="icon"></image>
			</view>
		</uni-nav-bar> -->
		<u-navbar :title="this.$t('my.grzx')" placeholder :autoBack="false" leftIcon="">
		</u-navbar>
		<view class="user-box flex align-center">
			<view class="avatar">
				<image src="../../static/images/icon6.png" mode="scaleToFill" class="avatar-img"></image>
			</view>
			<view class="info">
				<view class="f16 flex">{{userinfo.nickname}}
					<!-- <image :src="$imgUrl(level.img)" mode="scaleToFill" class="vip"></image> -->

				</view>
				<view class="f12">{{level.title}}</view>
				<!-- <view class="f12">信用分:{{userinfo.userpoint}}</view> -->
			</view>
		</view>
		<view class="bg">
			<view class="bankimg">
				<view class="bankimg_top">
					<view class="">
						{{this.$t('my.zhzzc')}}
						<text class="renzheng">
							<u-tag size="mini" @click="getauth"
								:text="certification == 0 ? this.$t('my.shz') : certification == -1 ? this.$t('my.wrz') : certification == 1 ? this.$t('my.yrz') : certification == 2 ? this.$t('my.wtg') : ''"
								:type="certification == 0 ? 'warning' : certification == -1 ? 'info' : certification == 1 ? 'success' : certification == 2 ? 'error' : ''" />
						</text>
					</view>
					<view class="">
						{{userinfo.usermoney ? userinfo.usermoney : 0.00}}
					</view>
				</view>
				<view class="bankimg_bottom">
					<view class="everylist">
						<view class="">
							{{this.$t('my.zhyk')}}
						</view>
						<view class="">
							{{userData.zhyk ? Number(userData.zhyk).toFixed(2) : 0.00}}
						</view>
					</view>
					<view class="everylist">
						<view class="">
							{{this.$t('my.ccje')}}
						</view>
						<view class="">
							{{userData.ccje ? Number(userData.ccje).toFixed(2) : 0.00}}
						</view>
					</view>
					<view class="everylist">
						<view class="">
							{{this.$t('my.xyf')}}
						</view>
						<view class="">
							{{userinfo.userpoint ? Number(userinfo.userpoint).toFixed(0) : 0}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="quikmenu">
			<u-cell-group>
				<u-cell icon="../../static/images/chongzhi.png" @click="chongzhi" size="large" :title="this.$t('my.cz')"
					isLink>
				</u-cell>
				<u-cell icon="../../static/images/tixian.png" @click="tixian" size="large" :title="this.$t('my.tx')"
					isLink></u-cell>
				<u-cell icon="../../static/images/chicangmx.png" url="record2" size="large" :title="this.$t('my.ccmx')"
					isLink>
				</u-cell>
				<u-cell icon="../../static/images/jilu.png" url="record1" linkType="switchTab" size="large"
					:title="this.$t('my.cztxjl')" isLink></u-cell>
				<u-cell icon="../../static/images/lixi.png" url="shouyi" size="large" :title="this.$t('my.rxb')" isLink>
				</u-cell>
				<u-cell icon="../../static/images/yinhangka.png" url="bind" size="large" :title="this.$t('my.bdyhk')"
					isLink v-if="this.mybank.accntno == ''"></u-cell>
				<u-cell icon="../../static/images/yinhangka.png" url="bank" size="large" :title="this.$t('my.yhkh')"
					isLink v-else>
				</u-cell>
				<u-cell icon="../../static/images/usercenter1.png" url="about" size="large" :title="this.$t('my.gywm')"
					isLink>
				</u-cell>
				<u-cell icon="../../static/images/news.png" url="privacyPolicy" size="large" :title="this.$t('my.yscl')"
					isLink>
				</u-cell>
				<u-cell icon="../../static/images/outlogin.png" size="large" :title="this.$t('my.tcdl')"
					@click="gettuichu" isLink>
				</u-cell>
			</u-cell-group>
			<!-- <navigator class="item" hover-class="none" url="record2">
				<image src="../../static/images/icon11.png" mode="scaleToFill" class="item-icon"></image>
				持仓明细
			</navigator>
			<navigator class="item" hover-class="none" url="record1" open-type="switchTab">
				<image src="../../static/images/icon8.png" mode="scaleToFill" class="item-icon"></image>
				建仓提现记录
			</navigator>
			<navigator class="item" hover-class="none" url="shouyi">
				<image src="../../static/images/icon9.png" mode="scaleToFill" class="item-icon"></image>
				日息宝
			</navigator>
			<navigator class="item" hover-class="none" url="bind" v-if="this.mybank.accntno == ''">
				<image src="../../static/images/icon10.png" mode="scaleToFill" class="item-icon"></image>
				绑定银行卡
			</navigator>
			<navigator class="item" hover-class="none" url="bank" v-else>
				<image src="../../static/images/icon8.png" mode="scaleToFill" class="item-icon"></image>
				银行卡
			</navigator> -->
		</view>
		<!-- 		<u-modal :show="chargeshow" zoom showCancelButton @cancel="chargeshow = false">
			<view class=""slot="default">
				<view class="input-box flex align-center">
					<view class="label">支付方式：</view>
					<view class="input flex align-center justify-between" @click="show">
						<view>{{chongzhiForm.truename}}</view>
						<uni-icons type="bottom" size="18" color="#D7D7D8"></uni-icons>
					</view>
				</view>
				<view class="input-box flex align-center">
					<view class="label">建仓金额：</view>
					<view class="input flex align-center">
						<uni-easyinput :inputBorder="false" placeholder="请输入您的建仓金额" v-model="chongzhiForm.price">
						</uni-easyinput>
					</view>
				</view>
			</view>
		</u-modal> -->
		<view class="">
			<u-modal :show="outshow" :title="$t('my.ts')" :content="$t('my.nqeytcdlm')" showCancelButton @cancel="outshow = false" :confirmText='$t("my.qr")' :cancelText='$t("my.qx")'
				@confirm="getoutlogin"></u-modal>
		</view>

		<uni-popup ref="tixian" type="bottom">
			<view class="box tixianbox">
				<image src="../../static/images/icon14.png" mode="scaleToFill" class="yinhangka"></image>
				<view class="input-box flex flex-column" style="color: #000;font-size: 28rpx;margin-bottom: 30rpx;">
					<!-- <view class="f15 mt5">姓名：{{mybank.accntnm}}</view>
					<view class="f15 mt5">开户行：{{mybank.cityno}}</view>
					<view class="f15 mt5">银行卡号：{{setno(mybank.accntno)}}</view>
					<view class="f15 mt5" style="display: flex;">余额：{{userinfo.usermoney}} &nbsp;&nbsp; 手续费：<view>
							{{shouxufei}}
						</view>
					</view> -->
					<!-- <u-cell-group :border="false">
						<u-cell title="姓名" :border="false" :value="mybank.accntnm"></u-cell>
						<u-cell title="开户行" :border="false" :value="mybank.cityno"></u-cell>
						<u-cell title="银行卡号" :border="false" :value="mybank.accntno"></u-cell>
						<u-cell title="余额" :border="false" :value="mybank.usermoney"></u-cell>
						<u-cell title="手续费" :border="false" :value="shouxufei"></u-cell>
					</u-cell-group> -->
				</view>
				<view class="" style="display: none;">
					<view class="input-box flex align-center">
						<view class="label">{{$t('my.xm')}}：</view>
						<view class="flex align-center">
							<u--input border="bottom" readonly v-model="mybank.accntnm"></u--input>
						</view>
					</view>
					<view class="input-box flex align-center">
						<view class="label">{{$t('my.khh')}}：</view>
						<view class="flex align-center">
							<u--input border="bottom" readonly v-model="mybank.cityno"></u--input>
						</view>
					</view>
					<view class="input-box flex align-center">
						<view class="label">{{$t('my.yhkh')}}：</view>
						<view class="flex align-center">
							<u--input border="bottom" readonly v-model="mybank.accntno"></u--input>
						</view>
					</view>
					<view class="input-box flex align-center">
						<view class="label">{{$t('my.ye')}}：</view>
						<view class="flex align-center">
							<u--input border="bottom" readonly v-model="mybank.usermoney"></u--input>
						</view>
					</view>
					<view class="input-box flex align-center">
						<view class="label">{{$t('my.sxf')}}：</view>
						<view class="flex align-center">
							<u--input border="bottom" readonly v-model="shouxufei"></u--input>
						</view>
					</view>
				</view>

				<u--form labelPosition="left" labelWidth="160rpx">
					<u-form-item :label="$t('my.txje')" borderBottom>
						<u--input v-model="price" border="none" :placeholder="$t('my.qsrndtxje')"></u--input>
					</u-form-item>
					<u-form-item :label="$t('my.txmm')" borderBottom>
						<u--input v-model="paypwd" border="none" :placeholder="$t('my.qsrndtxmm')"></u--input>
					</u-form-item>
				</u--form>

				<view class="f20" style="margin-top: 60rpx;">
					<u-button type="primary" :text="$t('my.tj')" @click="tixian_btn"></u-button>
				</view>

			</view>
		</uni-popup>
		<u-popup :show="chongzhishow" :round="10" mode="bottom" @close="chongzhishow = false" closeable>
			<view class="box">
				<image src="../../static/images/icon14.png" mode="scaleToFill" class="yinhangka"></image>
				<u--form labelPosition="left" :model="chongzhiForm" labelWidth="160rpx">
					<u-form-item :label="$t('my.zffs')" borderBottom>
						<u--input v-model="chongzhiForm.truename" border="none" readonly :placeholder="$t('my.qsrxm')"></u--input>
					</u-form-item>
					<u-form-item :label="$t('my.czje')" borderBottom>
						<u--input v-model="chongzhiForm.price" border="none" :placeholder="$t('my.qsrndczje')"></u--input>
					</u-form-item>
				</u--form>
				<view class="mt20 mb10" style="font-size: 24rpx;font-weight: 600;color: #000;">
					<view>{{$t('my.wxts')}}： </view>
					{{$t('my.yhczqlx')}}
				</view>
				<view class="" style="margin-top: 60rpx;">
					<u-button type="primary" :text="$t('my.qrcz')" @click="chongzhi_btn"></u-button>
				</view>
			</view>
		</u-popup>

		<!-- <uni-popup ref="password_pop" type="dialog">
			<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close"
				@confirm="confirm"></uni-popup-dialog>
		</uni-popup> -->
		<!-- 底部导航栏 -->
		
		<view class="" style='height: 100rpx;'></view>
		<tabbar :active='4' />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {},
				level: {},
				mybank: {
					accntno: ''
				},
				price: '',
				paypwd: '',
				itemList: [this.$t('my.ylzz'), 'USDT'],
				chongzhiForm: {
					uid: 0,
					pay_type: 31,
					price: '',
					truename: this.$t('my.ylzz')
				},
				reg_par: 0,
				chargeshow: true,
				outshow: false,
				chongzhishow: false,
				userData: '',
				certification: -1
			}
		},
		onLoad() {
			this.outshow = false
			console.log(this.outshow)
		},
		onShow() {
			uni.hideTabBar()
			// console.log(this.outshow)
			// if (this.vuex_login == 0) {
			// 	uni.navigateTo({
			// 		url: './login'
			// 	})
			// 	return
			// }
			// console.log(this.vuex_login)
			this.getUserinfo()
			this.getUserCertification()

		},
		computed: {
			shouxufei() {
				if (this.price) {
					return (this.price * this.reg_par) / 100
				}
				return 0
			}
		},
		mounted() {

		},
		methods: {
			getauth() {
				uni.navigateTo({
					url: '/pages/my/realname'
				})
			},
			async getUserCertification() {
				let res = await uni.$u.http.post('index/yii/getUserCardInfo')
				console.log(res)
				var data = res.msg[0]
				if (res.type == 1) {
					this.certification = data.state
				} else {
					this.certification = -1
				}
			},
			gettuichu() {
				this.outshow = true
			},
			getoutlogin() {
				uni.clearStorage()
				uni.navigateTo({
					url: '/pages/my/login'
				})
				this.outshow = false
			},
			setno(str) {
				if (str.length == 0) {
					return ''
				}
				let star = "*"
				if (str.length < 4) {
					return str
				}
				if (str.length < 8) {
					return str.substr(0, 4) + star.repeat(str.length - 4)
				}
				return str.substr(0, 4) + star.repeat(str.length - 8) + str.slice(-4)
			},
			clickLeft() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			clickRight() {
				uni.clearStorage()
				uni.navigateTo({
					url: '/pages/my/login'
				})
			},
			async getUserinfo() {
				let res = await uni.$u.http.post('index/yii/user_index.html', {
					uid: this.vuex_login
				})
				console.log(res)
				this.userData = res.data
				this.userinfo = res.data.user
				this.mybank = res.data.data.mybank
				this.level = res.data.level
				this.reg_par = res.data.reg_par
				//uni.$u.vuex('vuex_userinfo',this.userinfo)

			},
			tixian() {
				if (this.mybank.accntno == '') {
					uni.navigateTo({
						url: 'bind'
					})
					return
				}
				this.getUserinfo()
				this.price = '';
				this.paypwd = '';
				this.$refs.tixian.open()
			},
			chongzhi() {
				this.chongzhishow = true
			},
			show() {
				uni.showActionSheet({
					itemList: this.itemList,
					success: (res) => {
						// console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						this.chongzhiForm.truename = this.itemList[res.tapIndex]
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			async chongzhi_btn() {
				if (!uni.$u.test.number(this.chongzhiForm.price)) {
					uni.$u.toast(this.$t('my.jebzq'))
					return
				}
				this.chongzhiForm.uid = this.vuex_login
				let res = await uni.$u.http.post('index/yii/user_pay.html', this.chongzhiForm)
				this.chongzhishow = false
				if (res.type == 1) {
					uni.$u.toast(res.msg)
					this.$refs.chongzhi.close()
					this.getUserinfo()
				}

			},
			async tixian_btn() {
				if (!uni.$u.test.number(this.price)) {
					uni.$u.toast(this.$t('my.jebzq'))
					return
				}
				if (uni.$u.test.isEmpty(this.paypwd)) {
					uni.$u.toast(this.$t('my.txmmbnwk'))
					return
				}
				let res = await uni.$u.http.post('index/yii/user_cash.html', {
					uid: this.vuex_login,
					price: this.price,
					remark: '1',
					paypwd: this.paypwd
				})
				if (res.type == 1) {
					uni.$u.toast(res.msg)
					this.$refs.tixian.close()
					this.getUserinfo()
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
<style lang="scss" scoped>
	page {
		background: #000;
	}
	::v-deep .u-form-item {
		margin-bottom: 20rpx;
	}
	 .main  {
		background: #000;
	}
	.user-box {
		color: #fff !important;
	}

	::v-deep .u-button__text {
		font-size: 34rpx !important;
		font-weight: 500;
		letter-spacing: 4rpx;
	}

	::v-deep .u-button {
		border-radius: 14rpx;
		height: 90rpx !important;
		line-height: 90rpx !important;
	}

	::v-deep .u-modal__content__text {
		text-align: center !important;
	}

	::v-deep .u-cell__body--large {
		padding-top: 34rpx !important;
		padding-bottom: 34rpx !important;
	}

	.tixianbox {
		.input-box {
			margin-bottom: 30rpx;
		}
	}

	::v-deep .u-cell__left-icon-wrap {
		margin-right: 20rpx;

		image {
			width: 40rpx !important;
			height: 40rpx !important;
		}
	}

	::v-deep .u-cell__title-text {
		color: #fff;
		font-size: 28rpx;
	}

	.main .logo {
		width: 275rpx;
		height: 87rpx;
	}

	.main .icon {
		width: 57rpx;
		height: 57rpx;
	}

	.user-box {
		margin: 30rpx;
	}

	.user-box .avatar {
		background-color: #2979ff;
		border-radius: 50%;
		width: 100rpx;
		height: 100rpx;
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
		width: 48rpx;
		height: 48rpx;
		margin-left: 10rpx;
	}

	.bg {
		width: 94%;
		// height: 380rpx;
		border-radius: 20rpx;
		position: relative;
		margin: 0 auto;
	}

	.bg .bg-plus {
		position: absolute;
		z-index: 20;
		top: 40rpx;
		right: 40rpx;
	}

	.bg .bg-info {
		height: 380rpx;
		position: relative;
		z-index: 10;
		margin: 0 30rpx;
		padding: 0 30rpx;
		display: flex;
		flex-direction: column;
	}

	.bg .bg-info .money {
		color: #000;
		margin: 40rpx 0 30rpx 0;
		font-weight: 600;
	}

	.bg .bg-info .ka {
		color: #000;
		font-size: 35rpx;
		display: flex;
		justify-content: space-between;
		font-weight: 600;
	}

	.bg .bg-info .bg-btnbox {
		margin: 100rpx 0 40rpx 0;
		color: #000;
		font-weight: 600;
	}

	.bg .bg-info .btn {
		width: 159rpx;
		height: 60rpx;
		background-color: #000;
		border-radius: 40rpx;
		color: #E31F26;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bg .bg-img {
		width: 100%;
		height: 380rpx;
		position: absolute;
		z-index: 1;
		top: 0;
	}

	.bg .bankimg {
		padding: 40rpx 30rpx;
		background: linear-gradient(to top right, #409eff, #2979ff);
		border-radius: 20rpx;

		.bankimg_top {
			margin-bottom: 40rpx;

			view {
				&:first-child {
					font-weight: 600;
					color: #eee;
					// display: flex;
					// justify-content: space-between;
					display: flex;
					align-items: center;
				}

				&:last-child {
					margin-top: 10rpx;
					color: #000;
					font-weight: 600;
				}
			}

			.renzheng {
				margin-left: 20rpx;
				font-size: 24rpx;
			}
		}

		.bankimg_bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;

			view {
				display: flex;
				flex-direction: column;
				align-items: center;

				&:first-child {
					font-weight: 600;
					color: #eee;
				}

				&:last-child {
					margin-top: 10rpx;
					color: #000;
					font-weight: 600;
				}
			}
		}
	}

	.tabmenu {
		background-color: #E31F26;
		width: 65rpx;
		height: 65rpx;
		border-radius: 50%;
		position: absolute;
		top: 50rpx;
		right: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.quikmenu {
		/* display: grid;
		grid-template-columns: 320rpx 320rpx;
		justify-content: space-between;
		grid-row-gap: 40rpx; */
		margin: 30rpx 0;
		/* padding: 0 30rpx; */
		background: #000;
		margin-top: 60rpx;
	}

	.quikmenu .item {
		background-color: #000;
		height: 200rpx;
		border-radius: 16rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		font-size: 30rpx;
		color: #696A6A;

	}

	.quikmenu .item .item-icon {
		/* position: absolute;
		top: 30rpx;
		left: 30rpx; */
		width: 64rpx;
		height: 66rpx;
		margin-bottom: 20rpx;

	}

	.logo-bottom {
		width: 434rpx;
		height: 48rpx;
		margin: 60rpx auto 60rpx auto;

	}

	.box {
		background-color: #000;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		padding: 30rpx 50rpx;
		height: 60vh;

		.chargeinput {
			margin-bottom: 40rpx;
		}
	}

	.box .yinhangka {
		width: 350rpx;
		height: 68rpx;
		margin: 60rpx 30rpx 40rpx auto;
	}

	.box .input-box .label {
		font-size: 30rpx;
		margin-right: 20rpx;
		color: #fff;
	}

	.box .input-box .input {
		border: #D7D7D8 1px solid;
		border-radius: 80rpx;
		height: 64rpx;
		padding: 0 30rpx;
		color: #a6abb7;
		flex: 1;
	}

	.box .btn {
		width: 500rpx;
		height: 94rpx;
		background-color: #E31F26;
		border-radius: 80rpx;
		background-color: #E31F26;
		color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 80rpx auto 0 auto;
	}
</style>
