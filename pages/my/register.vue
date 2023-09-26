<template>
	<view class="login flex align-center flex-column">
		<!-- <uni-nav-bar  backgroundColor="rgba(255,255,255,0)" :statusBar="true" :border="false" style="width: 100vw;" @clickLeft="clickLeft">
			<view slot="left">
				<view class="tabmenu">
					<image src="../../static/images/icon4.png" mode="scaleToFill" class="icon"></image>
				</view>
			</view>
		</uni-nav-bar> -->
		<u-navbar :title="$t('register.zc')" placeholder :autoBack="true">
		</u-navbar>
		<!-- <image src="../../static/images/logo_small.png" class="logo-img" mode="scaleToFill"></image> -->
		<view class="input-box">
			<view class="welcome">
				{{$t('register.hyldzxzj')}}
			</view>
			<u-form labelPosition="left" :model="form" ref="form1">
				<u-form-item prop="username" leftIcon="account" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.nickname" :placeholder="$t('register.qsrxm')" border="none"></u--input>
				</u-form-item>
				<u-form-item prop="username" leftIcon="../../static/images/loginphone.png" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.utel" :placeholder="$t('register.qsrsjh')" border="none"></u--input>
				</u-form-item>
				<!--u-form-item prop="comname" leftIcon="account" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.comname" placeholder="请输入姓名" border="none"></u--input>
				</u-form-item>
				<!--u-form-item prop="birth" leftIcon="account" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.birth"  placeholder="身份证号码" border="none"  @blur="blurBirth"></u--input>
				</u-form-item-->
				<u-form-item leftIcon="lock" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.upwd" :placeholder="$t('register.qsrdlmm')" border="none" type="password"></u--input>
				</u-form-item>
				<u-form-item leftIcon="lock" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.upwd2" :placeholder="$t('register.zcsrdlmm')" border="none" type="password"></u--input>
				</u-form-item>
				<u-form-item leftIcon="../../static/images/jiaoyipass.png" borderBottom ref="item1"
					:leftIconStyle="{'font-size':'44rpx','color':'#999'}">
					<u--input v-model="form.paypwd" :placeholder="$t('register.qsrjymm')" border="none" type="number"></u--input>
				</u-form-item>
			</u-form>
			<!-- 	
			<view class="input flex align-center">
				<image src="../../static/images/icon1.png" mode="scaleToFill" class="icon"></image>
				<uni-easyinput :inputBorder="false" placeholder="请输入真实姓名" v-model="form.comname"></uni-easyinput>
			</view>
			<view class="input flex align-center" >
				<image src="../../static/images/icon3.png" mode="scaleToFill" class="icon"></image>
				<uni-easyinput :inputBorder="false" placeholder="身份证后四位" value=""  v-model="form.username"></uni-easyinput>
			</view> -->
			<view class="loginbtn">
				<u-button type="primary" :text="$t('register.aqzc')" @click="register"></u-button>
			</view>
			<view class="wangji">
				<!-- <text class="f15 green" hover-class="none" url="./register">立即开户</text> -->
				<text>{{$t('register.yyzh')}}？</text>
				<text class="wangjipass" @click="getlogin">{{$t('register.dl')}}</text>
			</view>
		</view>
		<!-- <image src="../../static/images/logo_gray.png" mode="scaleToFill" class="logo-bottom"></image> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					comname: '',
					nickname: '',
					username: '',
					utel: '',
					upwd: '',
					upwd2: '',
					paypwd: '',
					oid: 8888888,
					birth: '',
					avatar: '0'
				}
			}
		},
		mounted() {

		},
		watch: {
			upwd(e) {
				this.form.upwd = e.replace(/[\W]/g, '')
				console.log(e)
			},
			upwd2(e) {
				this.form.upwd2 = e.replace(/[\W]/g, '')
			}
		},
		methods: {
			getlogin() {
				uni.navigateTo({
					url: '/pages/my/login',
					animationType: 'slide-in-right',
					animationDuration: 2000
				})
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			blurNickname() {
				this.form.nickname = this.form.nickname.replace(/[\W]/g, '')
			},
			
			blurBirth() {
				this.form.birth = this.form.birth.replace(/[\W]/g, '')
			},
			
			blurUtel() {
				this.form.upwd = this.form.upwd.replace(/[\W]/g, '')
			},
			blurUpwd() {
				this.form.upwd = this.form.upwd.replace(/[\W]/g, '')
			},
			blurUpwd2() {
				this.form.upwd2 = this.form.upwd2.replace(/[\W]/g, '')
			},
			async register() {

				let result = Object.values(this.form).filter((item) => {
					return item == ''
				})
				//if (this.form.nickname.length < 3) {
				//	uni.$u.toast('姓名输入字数最少3位')
				//	return
				//}
				
				//if (this.form.birth.length < 18) {
				//	uni.$u.toast('身份证号码18位数')
				//	return
				//}
				
				//if (this.form.birth.length > 18) {
				//	uni.$u.toast('身份证号码18位数')
				//	return
				//}
				
				if (this.form.upwd.length < 6) {
					uni.$u.toast(this.$t('register.zhlw'))
					return
				}
				if (this.form.upwd2.length < 6) {
					uni.$u.toast(this.$t('register.zhlw'))
					return
				}
				if (this.form.paypwd.length < 6) {
					uni.$u.toast(this.$t('register.lwsjymm'))
					return
				}
				if (this.form.paypwd.length > 6) {
					uni.$u.toast(this.$t('register.lwsjymm'))
					return
				}
				/*if(result.length>0){
					uni.$u.toast('所有选项不能为空')
					return
				}*/
				let res = await uni.$u.http.post('index/yii/register.html', this.form)
				console.log(res)
				if (res.type == 1) {
					var address = res.data.address
					uni.setStorageSync("xtoken", address)
					uni.$u.vuex('vuex_user', res.data)
					uni.$u.vuex('vuex_login', res.data.uid)
					uni.$u.toast(this.$t('register.czcg'))
					uni.switchTab({
						url: './index'
					})
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.login {
		background: #000;
	}
	/deep/ .uni-input-input {
		color: #fff !important;
	}
	::v-deep .u-form-item__body__left__content__icon .u-icon--right image{
		width: 44rpx !important;
		height: 44rpx !important;
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
		font-size: 26rpx;
		color: #fff;
		.wangjipass {
			color: #2979ff;
		}
	}
	
	.login {
		width: 100vw;
		height: 100vh;
	}
	
	.input-box {
		width: 80%;
	}
	
	
	.logo-img {
		width: 413rpx;
		height: 201rpx;
		margin-top: 50px;
		margin-bottom: 80rpx;
	
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
		color: #000;
		font-size: 40rpx;
		margin-top: 80rpx;
	}
	
	.input-tip {
		margin-top: 80rpx;
	}
	
	.logo-bottom {
		width: 434rpx;
		height: 48rpx;
		margin-bottom: 60rpx;
		margin-top: auto;
	}
	
	.tabmenu {
		background-color: #E31F26;
		width: 65rpx;
		height: 65rpx;
		border-radius: 50%;
		position: absolute;
		top: 50rpx;
		left: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.tabmenu .icon {
		width: 30rpx;
		height: 30rpx;
	}
</style>
