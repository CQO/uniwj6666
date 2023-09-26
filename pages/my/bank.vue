<template>
	<view class="main flex  justify-center flex-column">
		<!-- <uni-nav-bar backgroundColor="rgba(255,255,255,0)" rightWidth="275rpx" height="120rpx" :statusBar="true"
			:border="false" style="width: 100vw;" @clickLeft="clickLeft">
			<view slot="left">
				<view class="tabmenu">
					<image src="../../static/images/icon4.png" mode="scaleToFill" class="icon"></image>
				</view>
			</view>
			<view slot="right">
				<image src="../../static/images/logo_small.png" mode="scaleToFill" class="icon"></image>
			</view>
		</uni-nav-bar> -->
		<!-- <u-navbar title="银行卡" placeholder :autoBack="true">
		</u-navbar> -->
		<uni-nav-bar backgroundColor="rgba(255,255,255,0)" rightWidth="275rpx" height="120rpx" :statusBar="true"
					:border="false" style="width: 100vw;" @clickLeft="clickLeft">
					<view slot="left">
						<view class="tabmenu">
							<image src="../../static/images/icon4.png" mode="scaleToFill" class="icon"></image>
						</view>
					</view>
				</uni-nav-bar>
		<image src="../../static/images/icon14.png" mode="scaleToFill" class="yinhangka"></image>
		<view class="bg">
			<!-- <view class="bg-info" >
				<view>
					<view style="font-size: 35rpx;color: #fff;font-weight: bold;">{{mybank.cityno}}</view>
					<view style="margin-top: 20rpx;color: #fff;">银行卡号 ：{{setno(mybank.accntno)}} </view>
					<view style="margin-top: 20rpx;color: #fff;">开户行地址： {{mybank.address}}</view>
				</view>
				<uni-icons type="plusempty" size="64" color="#ffffff"></uni-icons>
				<view class="bg-txt" @click="unbound">解绑银行卡</view>
			</view> -->
			<view class="bg-info">
				<view class="money f15 flex justify-between">
					余额：{{userinfo.usermoney}}
					<text>{{setnoo(mybank.accntnm)}} </text>
				</view>

				<view class="ka">
					{{mybank.address ? mybank.address : '暂未绑定银行卡'}}
				</view>
				<view class="bg-btnbox flex justify-between">
					{{setno(mybank.accntno)}}
					<text>{{mybank.cityno}} </text>
				</view>
			</view>
			<view class="bankimg">

			</view>
			<!-- <image src="../../static/images/bg.png" mode="scaleToFill" class="bg-img"></image> -->
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="form">
				<uni-icons type="close" color="#666666" size="48" class="close" @click="$refs.popup.close()">
				</uni-icons>
				<view class="input-box">
					<view class="label">姓名</view>
					<view class="input flex align-center">
						<uni-easyinput :inputBorder="false" placeholder="请输入姓名" v-model="form.accntnm"></uni-easyinput>
					</view>
				</view>
				<view class="input-box">
					<view class="label">银行名称：</view>
					<view class="input flex align-center">
						<uni-easyinput :inputBorder="false" placeholder="请输入银行名称" v-model="form.cityno"></uni-easyinput>
					</view>
				</view>
				<view class="input-box">
					<view class="label">支行名称：</view>
					<view class="input flex align-center">
						<uni-easyinput :inputBorder="false" placeholder="请输入支行名称" v-model="form.address">
						</uni-easyinput>
					</view>
				</view>
				<view class="input-box">
					<view class="label">银行卡号：</view>
					<view class="input flex align-center" @paste.native.capture.prevent='handPaste'>
						<uni-easyinput :inputBorder="false" placeholder="请输入银行卡号" v-model="form.accntno">
						</uni-easyinput>
					</view>
				</view>

				<view class="input-box">
					<view class="btn flex align-center justify-center" @click="save">
						确认绑定
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mybank: {},
				form: {
					bankno: '1',
					provinceid: '1',
					cityno: '',
					address: '',
					accntnm: '',
					accntno: '',
					scard: '1',
					phone: '1',
					uid: 0
				},
				unboundFrom: {
					uid: 0
				},
				userinfo: ''
			}
		},

		handPaste() {
			console.log('禁止粘贴')
			return false
		},

		mounted() {

		},
		onShow() {
			console.log("===============")
			this.getUserinfo()
		},
		methods: {
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
			setnoo(str) {
				if (str.length == 0) {
					return ''
				}
				let star = "*"
				
				
				if (str.length < 10) {
					return str.substr(0, 1) + star.repeat(str.length - 1)
				}
				return str.substr(0, 1) + star.repeat(str.length - 1) 
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			async getUserinfo() {
				console.log(this.vuex_login)
				let res = await uni.$u.http.post('index/yii/user_index.html', {
					uid: this.vuex_login
				})
				// console.log(this.vuex_login)
				this.userinfo = res.data.user
				this.mybank = res.data.data.mybank
				this.form.accntnm = this.mybank.accntnm
				this.form.accntno = this.mybank.accntno
				this.form.address = this.mybank.address
				this.form.cityno = this.mybank.bank_nm
				console.log(JSON.stringify(res.data.data.mybank))


			},
			tixian() {

				this.getUserinfo()
				this.$refs.popup.open()

			},
			async unbound() {
				console.log(this.vuex_login)
				let res = await uni.$u.http.post('/index/yii/delBankcard.html', {
					uid: this.vuex_login
				})
				console.log(res)
				if (res.type == 1) {
					uni.$u.toast('解绑成功')
					uni.switchTab({
						url: './index'
					})
				}
			},
			async save() {
				// let result = Object.values(this.form).filter((item)=>{
				// 	return item==''
				// })
				// if(result.length>0){
				// 	uni.$u.toast('所有选项不能为空')
				// 	return
				// }
				this.form.uid = this.vuex_login
				let res = await uni.$u.http.post('index/yii/dobanks.html', this.form)
				if (res.type == 1) {
					uni.$u.toast('绑定成功')
					this.$refs.popup.close()
					uni.switchTab({
						url: './index'
					})
				}
			}
		}
	}
</script>
<style scoped>
	page {
		background: #000;
	}
	.main .icon {
		width: 275rpx;
		height: 87rpx;
	}

	.tabmenu {
		background-color: #000;
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

	.yinhangka {
		width: 350rpx;
		height: 68rpx;
		margin: 80rpx 30rpx 80rpx auto;

	}

	.bg {
		width: 690rpx;
		height: 380rpx;
		border-radius: 40rpx;
		position: relative;
		margin: 0 auto;
	}

	.bg .bg-info {
		height: 94%;
		position: relative;
		z-index: 10;
		margin: 0 30rpx;
		padding: 0 30rpx;
		display: flex;
		flex-direction: column;
	}

	.bg .bg-info .money {
		color: #fff;
		margin: 40rpx 0 30rpx 0;
		font-weight: 600;
	}

	.bg .bg-info .ka {
		color: #ffffff;
		font-size: 35rpx;
		display: flex;
		justify-content: space-between;
		font-weight: 600;
	}

	.bg .bg-info .bg-btnbox {
		margin: 100rpx 0 40rpx 0;
		color: #fff;
		font-weight: 600;
	}

	.bg .bg-info .btn {
		width: 159rpx;
		height: 60rpx;
		background-color: #ffffff;
		border-radius: 40rpx;
		color: #E31F26;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bg .bg-txt {
		color: #fff;
		margin-top: 60rpx;
		font-size: 30rpx;
		background-color: #E31F26;
		padding: 10rpx;
		border-radius: 10rpx;
	}

	.bg .bg-img {
		width: 690rpx;
		height: 380rpx;
		position: absolute;
		z-index: 1;
		top: 0;
	}

	.bg .bankimg {
		width: 100%;
		height: 380rpx;
		background: linear-gradient(to top right, #409eff, #2979ff);
		position: absolute;
		z-index: 1;
		top: 0;
		border-radius: 20rpx;
	}

	.form {
		background-color: #fff;
		border-top-left-radius: 80rpx;
		border-top-right-radius: 80rpx;
		height: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.form .close {
		position: absolute;
		top: 60rpx;
		right: 60rpx;
	}

	.form .input-box {
		width: 600rpx;
		display: flex;
		align-items: center;
		margin: 20rpx 0;
	}

	.form .input-box .label {
		width: 160rpx;
	}

	.form .input-box .input {
		border: #D7D7D8 1px solid;
		border-radius: 80rpx;
		height: 64rpx;
		padding: 0 30rpx;
		flex: 1;

	}

	.form .input-box .input .icon {
		width: 30rpx;
		height: 37rpx;
	}

	.form .input-box .btn {
		border-radius: 80rpx;
		height: 94rpx;
		background-color: #E31F26;
		color: #ffffff;
		font-size: 40rpx;
		margin-top: 80rpx;
		width: 600rpx;
	}

	.form .input-tip {
		margin-top: 80rpx;
	}
</style>
