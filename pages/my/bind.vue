<template>
	<view class="main flex  justify-center flex-column">
		<uni-nav-bar backgroundColor="rgba(255,255,255,0)" rightWidth="275rpx" height="120rpx" :statusBar="true"
			:border="false" style="width: 100vw;" @clickLeft="clickLeft">
			<view slot="left">
				<view class="tabmenu">
					<image src="../../static/images/icon4.png" mode="scaleToFill" class="icon"></image>
					<!-- <u-icon name='play-left-fill' color='#fff'></u-icon> -->
				</view>
			</view>
			<!-- <view slot="right">
				<image src="../../static/images/logo_small.png" mode="scaleToFill" class="icon"></image>
			</view> -->
		</uni-nav-bar>
		<image src="../../static/images/icon14.png" mode="scaleToFill" class="yinhangka"></image>
		<view class="bg">
			<view class="bg-info" @click="tixian">
				<uni-icons type="plusempty" size="64" color="#ffffff"></uni-icons>
				<view class="bg-txt">{{$t('bind.bdyhk')}}</view>
			</view>
			<image src="../../static/images/bg.png" mode="scaleToFill" class="bg-img"></image>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="form">
				<uni-icons type="close" color="#666666"size="48" class="close" @click="$refs.popup.close()"></uni-icons>
				<view class="input-box">
					<view class="label">{{$t('bind.xm')}}</view>
					<view class="input flex align-center" >
						<uni-easyinput  :inputBorder="false" :placeholder="$t('bind.qsrxm')" v-model="form.accntnm" inputColor="#000000"  ></uni-easyinput>
					</view>
				</view>
				
				<view class="input-box">
				<view class="label">{{$t('bind.dq')}}</view>
				<view class="input flex align-center" >
						<uni-easyinput  :inputBorder="false" :placeholder="$t('bind.qsrdq')" v-model="form.provinceid"  inputColor="#000000"  ></uni-easyinput>
					</view>
				</view>
				
				<view class="input-box">
					<view class="label">{{$t('bind.yhmc')}}：</view>
					<view class="input flex align-center"> 
						<uni-easyinput :inputBorder="false" :placeholder="$t('bind.qsryhmc')" v-model="form.cityno"  inputColor="#000000"></uni-easyinput>
					</view>
				</view>
				<view class="input-box">
					<view class="label">{{$t('bind.zhmc')}}：</view>
					<view class="input flex align-center"> 
						<uni-easyinput :inputBorder="false" :placeholder="$t('bind.qsrzhmc')" v-model="form.address"  inputColor="#000000"></uni-easyinput>
					</view>
				</view>
				<view class="input-box">
					<view class="label">{{$t('bind.yhkh')}}：</view>
					<view class="input flex align-center" @paste.native.capture.prevent='handPaste'>						
						<uni-easyinput :inputBorder="false" :placeholder="$t('bind.qsryhkh')" v-model="form.accntno"  inputColor="#000000"></uni-easyinput>
					</view>
				</view>
 
				<view class="input-box">
					<view class="btn flex align-center justify-center" @click="save">
						{{$t('bind.qrbd')}}
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
				form:{
					bankno: '1',
					provinceid: '',
					cityno: '',
					address: '',
					accntnm: '',
					accntno: '',
					scard: '1',
					phone: '1',
					uid:0 
				}
			}
		},
		
		handPaste () {
		  console.log('禁止粘贴')
		  return false
		},
		
		mounted() {

		},
		methods: {
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			blurCityno(){
				this.form.cityno = this.form.cityno.replace(/[^\u4e00-\u9fa5]/g,'')
			},
			blurAddress(){
				this.form.address = this.form.address.replace(/[^\u4e00-\u9fa5]/g,'')
			},
			blurAccntnm(){
				this.form.accntnm = this.form.accntnm.replace(/[^\u4e00-\u9fa5]/g,'')
			},
			blurProvinceid(){
				this.form.provinceid = this.form.provinceid.replace(/[^\u4e00-\u9fa5]/g,'')
			},
			
			
			async getUserinfo() {
				let res = await uni.$u.http.post('index/yii/user_index.html', {
					uid: this.vuex_login				
				})
				console.log(res)
				this.form.accntnm = res.data.user.comname
				
				
			},
			tixian() {
				
				this.getUserinfo()
				this.$refs.popup.open()
				
			},
			async save(){
				// let result = Object.values(this.form).filter((item)=>{
				// 	return item==''
				// })
				// if(result.length>0){
				// 	uni.$u.toast('所有选项不能为空')
				// 	return
				// }
				
				
				//if(this.form.accntno.length < 16){
				//	uni.$u.toast('银行卡号不得低于16位数')
				//	return
				//}
				this.form.uid  = this.vuex_login
				let res = await uni.$u.http.post('index/yii/dobanks.html',this.form) 	
				if(res.type==1){
					uni.$u.toast(this.$t('bind.bdcg'))
					this.$refs.popup.close()
					uni.switchTab({
						url:'./index'
					})
				}
			}
		}
	}
</script>
<style scoped>
	.main .icon {
		width: 275rpx;
		height: 87rpx;
	}

	.tabmenu {
		background-color: #1c5699;
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
		height: 380rpx;
		position: relative;
		z-index: 10;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.bg .bg-txt {
		color: #fff;
		margin-top: 60rpx;
		font-size: 36rpx;
	}

	.bg .bg-img {
		width: 690rpx;
		height: 380rpx;
		position: absolute;
		z-index: 1;
		top: 0;
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
	.form .close{
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
	.form .input-box .label{
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
		background-color: #1c5699;
		color: #ffffff;
		font-size: 40rpx;
		margin-top: 80rpx;
		width: 600rpx;
	}

	.form .input-tip {
		margin-top: 80rpx;
	}
</style>
