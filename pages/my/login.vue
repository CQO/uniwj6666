<template>
	<view class="login flex align-center justify-center flex-column">
		<!-- <ds-navbar></ds-navbar> -->
		<u-navbar :title="$t('login.dl')" placeholder :autoBack="false" rightIcon="server-fill" @rightClick="rightClick" rightIconColor='#fff'>
			<view class="u-nav-slot" slot="left">
				<view class="" @click='langShow = true'>
					{{language}}
				</view>
			</view>
		</u-navbar>

		<view class="input-box">
			<view class="welcome">
				{{$t('login.hyldzxzj')}}
			</view>
			<u-form labelPosition="left" :model="form" ref="form1">
				<u-form-item prop="username" leftIcon="account" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.username" :placeholder="$t('login.qsryhm')" border="none"></u--input>
				</u-form-item>
				<u-form-item leftIcon="lock" prop="upwd" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.upwd" :placeholder="$t('login.qsrdlmm')" border="none" type="password"></u--input>
				</u-form-item>
			</u-form>
			<!-- <view class="input flex align-center">
				<image src="../../static/images/icon1.png" mode="scaleToFill" class="icon"></image>
				<uni-easyinput :inputBorder="false" placeholder="请输入用户名" v-model="form.username"></uni-easyinput>
			</view>
			<view class="input flex align-center">
				<image src="../../static/images/icon2.png" mode="scaleToFill" class="icon"></image>
				<uni-easyinput :inputBorder="false" placeholder="请输入登录密码" v-model="form.upwd" type="password">
				</uni-easyinput>
			</view> -->
			<!-- <view class="btn flex align-center justify-center" @click="login">
				登入
			</view> -->
			<view class="loginbtn">
				<u-button type="primary" :text="$t('login.aqdl')" @click="login"></u-button>
			</view>

			<view class="wangji">
				<!-- <text class="f15 green" hover-class="none" url="./register">立即开户</text> -->
				<text class="wangjipass">{{$t('login.wjmm')}}？</text>
			</view>
		</view>
		<view class="logo-bottom">
			<!--view class="linemain">
				<text class="line"></text>
				<text class="kuaijie">快捷登录</text>
				<text class="line"></text>
			</view-->
			<!--view class="otherlogin">
				<view class="everylist" v-for="item in loginArray" :key="item.Image" @click="getnodata">
					<image :src="item.Image" mode=""></image>
				</view>
			</view-->
			<view class="loginverybottom">
				{{$t('login.myzh')}}？<text @click="getreg">{{$t('login.ljzc')}}</text>
			</view>
		</view>
		<u-notify ref="uNotify" message="Hi uView"></u-notify>
		<!-- <view class="tabmenu" @click="$refs.drawer.open()">
			<uni-icons type="bars" size="18" color="#ffffff"></uni-icons>
		</view> -->
		
		<!-- 切换语言 -->
		<u-popup :show="langShow" @close="langShow = false" mode="center" round="10">
			<view class="popup">
				<view class="popup-title">
					<!-- {{$t('home.qxzyy')}} -->
					请选择语言
				</view>
				<view class="lang">
					<view class="lang-item" @click='changeLang("zh-cn")'>
						<image src="../../static/base/zh.png" mode="aspectFit"></image>
						<text>简体中文</text>
					</view>
					<view class="lang-item" @click='changeLang("zh-tw")'>
						<image src="../../static/base/zh.png" mode="aspectFit"></image>
						<text>繁體中文</text>
					</view>
					<view class="lang-item" @click='changeLang("en-us")'>
						<image src="../../static/base/en.png" mode="aspectFit"></image>
						<text>English</text>
					</view>
					<view class="lang-item" @click='changeLang("ry-rb")'>
						<image src="../../static/base/sp.png" mode="aspectFit"></image>
						<text>日本語</text>
					</view>
				</view>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				lang: uni.getStorageSync('lang') || 'zh-cn',
				langShow: false,
				
				form: {
					username: '',
					upwd: ''
				},
				loginArray: [{
						Image: require('@/static/images/loginios.png'),
					},
					{
						Image: require('@/static/images/logingoogle.png'),
					},
					{
						Image: require('@/static/images/loginface.png'),
					},
				],
				rules: {
					'username': {
						type: 'string',
						required: true,
						message: this.$t('login.qsryhm'),
						trigger: ['blur', 'change']
					},
					'upwd': {
						type: 'string',
						min: 6,
						required: true,
						message: this.$t('login.qsrdlmm'),
						trigger: ['blur', 'change']
					},
				},
			}
		},
		components: {
			DsNavbar
		},
		computed: {
			language() {
				let language = ''
				switch (this.lang) {
					case 'zh-cn':
						language = '简体中文'
						break
					case 'zh-tw':
						language = '繁體中文'
						break
					case 'en-us':
						language = 'English'
						break
					case 'ry-rb':
						language = '日本語'
						break
					default:
						language = '简体中文'
				}
				return language
			}
		},
		
		methods: {
			changeLang(lang) {
				this.$i18n.locale = lang
				uni.setStorageSync('lang', lang)
				this.lang = lang
				this.langShow = false
			},
			rightClick() {
				window.location.href = 'http://45.207.43.1/chatlink.html'
			},
			getnodata() {
				this.$refs.uNotify.show({
					top: 0,
				    type: 'warning',
					message: this.$t('login.nszddqzwktcff'),
					duration: 1000,
					safeAreaInsetTop: true
				})
			},
			getreg(){
				uni.navigateTo({
					url:'/pages/my/register',
					animationType: 'slide-in-right',
					animationDuration: 2000
				})
			},
			async login() {
				if (uni.$u.test.isEmpty(this.form.username) || uni.$u.test.isEmpty(this.form.upwd)) {
					uni.$u.toast(this.$t('login.yhmhzmmbnwk'))
					return
				}
				let res = await uni.$u.http.post('index/yii/login.html', this.form)
				if (res.type == 1) {
					var address = res.data.address
					uni.setStorageSync("xtoken", address)
					uni.$u.vuex('vuex_user', res.data)
					uni.$u.vuex('vuex_login', res.data.uid)
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	// page {
	// 	background: #fff;
	// }
	.login {
		background: #000;
	}
	/deep/ .uni-input-input {
		color: #fff !important;
	}
	.welcome {
		margin-top: 160rpx;
		font-weight: 600;
		color: #fff;
		font-size: 48rpx;
		margin-bottom: 60rpx;
	}
	
	::v-deep .u-form-item {
		margin-bottom: 40rpx;
	}
	
	.loginbtn {
		margin-top: 70rpx;
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
	
	.wangji {
		margin-top: 30rpx;
		text-align: right;
	
		.wangjipass {
			color: #2979ff;
			font-size: 26rpx;
		}
	}
	
	.login {
		width: 100vw;
		height: 100vh;
	}
	
	.input-box {
		width: 80%;
	}
	
	.logo-bottom {
		width: 70%;
		margin-bottom: 100rpx;
		margin-top: auto;
	
		.linemain {
			display: flex;
			align-items: center;
			justify-content: space-between;
	
			.line {
				width: 150rpx;
				height: 2rpx;
				background: #d6d6d6;
			}
	
			.kuaijie {
				font-size: 26rpx;
				color: #d6d6d6;
			}
		}
	
		.otherlogin {
			display: flex;
			align-items: center;
			padding: 0 50rpx;
			justify-content: space-between;
			margin-top: 50rpx;
			margin-bottom: 30rpx;
	
			.everylist {
				padding: 18rpx;
				border-radius: 50%;
				background: #f6f6f7;
	
				image {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
				}
			}
		}
	
		.loginverybottom {
			text-align: center;
			font-size: 26rpx;
			color: #fff;
			// background:rgb(240,240,240);
			padding:16rpx 50rpx;
		    border-radius:16px
		}
	}
	
	.popup {
		width: 500rpx;
		padding: 20rpx;

		.popup-title {
			margin: 20rpx 0 30rpx;
			width: 100%;
			text-align: center;
		}

		.lang {
			width: 400rpx;
			margin: 10rpx auto 30rpx;
			border: 1px solid #ccc;
			border-radius: 20rpx;

			.lang-item {
				height: 80rpx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #ccc;
				font-size: 22rpx;

				image {
					width: 50rpx;
					margin: 0 20rpx;
				}

				&:last-child {
					border-bottom: none;
				}
			}
		}
	}

</style>
