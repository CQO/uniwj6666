<template>
	<view class="container">
		<u-navbar :title="$t('realname.sm')" placeholder :autoBack="true" leftIconColor='#fff'>
		</u-navbar>
		<view class="top">
			<!-- 自定义表单校验 -->
			<!-- 			<view class="input flex align-center">
				<view class="input-title" style="color: #000000;">
					真实姓名
				</view>
				<uni-easyinput :inputBorder="false" :disabled="customFormData.state != -1 && customFormData.state != 2" placeholder="请输入用户名" inputColor="#000000" v-model="customFormData.name">
				</uni-easyinput>
			</view>
			<view class="input flex align-center">
				<view class="input-title" style="color: #000000;">
					身份证号
				</view>
				<uni-easyinput :inputBorder="false" :disabled="customFormData.state != -1 && customFormData.state != 2" placeholder="请输入身份证号" inputColor="#000000" v-model="customFormData.id_card">
				</uni-easyinput>
			</view> -->
			<u--form labelPosition="left" labelWidth="160rpx">
				<u-form-item :label="$t('realname.zsxm')" borderBottom>
					<u--input v-model="customFormData.name" border="none"
						:disabled="customFormData.state != -1 && customFormData.state != 2" :placeholder="$t('realname.srxm')">
					</u--input>
				</u-form-item>
				<u-form-item :label="$t('realname.sfzh')" borderBottom>
					<u--input v-model="customFormData.id_card" border="none"
						:disabled="customFormData.state != -1 && customFormData.state != 2" :placeholder="$t('realname.srsfzh')">
					</u--input>
				</u-form-item>
			</u--form>
		</view>
		<!-- <view class="upload">
			<view class="reject" v-if="customFormData.state == 2">
				认证审核拒绝： {{customFormData.card_content}}
			</view>
			<view class="title">
				请上传身份证照片
			</view>
			<view class="imgs">
				

				<image :src="customFormData.id_card_positive" mode="" style="width: 280rpx;height: 280rpx;"
					@click="handleChooseImgA"></image>
				<image :src="customFormData.id_card_negative" mode="" style="width: 280rpx;height: 280rpx;"
					@click="handleChooseImgB"></image>
			</view>
			<view class="desc">
				<image class="tip" src="../../static/images/tip.png"></image>
				<view class="text">
					证件照必须是清晰彩色原件电子版本，可以是扫描件或者数码拍摄照片，支持jpg、png、jpeg的图片格式
				</view>
			</view> -->
			
			<view class="" style="margin-top: 40rpx;">
				<u-button type="primary" :text="$t('realname.zzsh')" disabled v-if="customFormData.state == 0">
				</u-button>
				<u-button type="primary" :text="$t('realname.rztg')" disabled v-if="customFormData.state == 1">
				</u-button>
				<u-button type="primary" :text="$t('realname.qrsc')"
					v-if="customFormData.state == -1 || customFormData.state == 2" @click="submit('customForm')"></u-button>
			</view>
			
				
			<!-- 			<button type="primary" class="btn" disabled  v-if="customFormData.state == 0">正在审核</button>
			<button type="primary" style="background-color: rgb(237, 211, 58);" class="btn" disabled  v-if="customFormData.state == 1">认证通过</button>
			<button type="primary" class="btn" @click="submit('customForm')" v-if="customFormData.state == -1 || customFormData.state == 2">确认上传</button> -->
		</view>

	</view>
</template>

<script>
	import uploadImg from '../../components/amazarashi-uploadimg/uploadImg.vue'
	export default {
		components: {
			uploadImg
		},
		data() {
			return {
				src: '',
				// 自定义表单数据
				userid: "",
				username: '',
				customFormData: {
					name: '',
					id: '',
					id_card: '',
					id_card_positive: "../../static/images/add1.png",
					id_card_negative: "../../static/images/add1.png",
					state: -1,
					card_content: ''
				}
			};
		},
		onLoad() {
			this.getUserCertification()
		},
		watch: {
			'customFormData.state'() {
				let str = '*'
				if (this.customFormData.state != -1 && this.customFormData.state != -2) {
					let len = this.customFormData.id_card.length
					this.customFormData.name = this.customFormData.name[0] + str.repeat(this.customFormData.name.length-1)
					this.customFormData.id_card = str.repeat(len - 4) + this.customFormData.id_card.slice(len-4, len)
				}
			}
		},
		methods: {
			async getUserCertification() {
				let res = await uni.$u.http.post('index/yii/getUserCardInfo')
				console.log(res)
				if (res.type == 1) {
					var data = res.msg[0]
					this.customFormData = data
				}
			},
			handleChooseImgA() {
				let xtoken = uni.getStorageSync("xtoken")
				var baseUrl = this.$baseUrl()
				var that = this
				uni.chooseImage({ //选择要发送的图片
					success(chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: baseUrl + 'index/yii/uploadCard',
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								"xtoken": xtoken
							},
							success: (res) => {
								var data = JSON.parse(res.data)
								console.log(typeof(data))
								if (data.type == 1) {

									that.customFormData.id_card_positive = that.$imgUrl('/' + data
										.data)
									console.log(that.customFormData.id_card_positive)
								}
							}
						})
					}
				});


			},
			handleChooseImgB() {
				let xtoken = uni.getStorageSync("xtoken")
				console.log(this.$baseUrl())
				var baseUrl = this.$baseUrl()
				var that = this
				uni.chooseImage({ //选择要发送的图片
					success(chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: baseUrl + 'index/yii/uploadCard',
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								"xtoken": xtoken
							},
							success: (res) => {
								var data = JSON.parse(res.data)
								if (data.type == 1) {
									that.customFormData.id_card_negative = that.$imgUrl('/' + data
										.data)
								}
							}
						})
					}
				});

			},
			async submit() {
				let res = await uni.$u.http.post('index/yii/saveCardInfo', {
					id: this.customFormData.id,
					id_card: this.customFormData.id_card,
					name: this.customFormData.name,
					state: 0,
					id_card_positive: this.customFormData.id_card_positive,
					id_card_negative: this.customFormData.id_card_negative
				})
				if (res.type == 1) {
					uni.$u.toast(this.$t('realname.sqcg'))
					uni.switchTab({
						url: './index'
					})
				}


			},
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #000;
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 20rpx;
		box-sizing: border-box;
	}



	.top,
	.upload {
		background-color: #fff;
		padding: 20rpx;
		box-sizing: border-box;
		border-radius: 20rpx;

		.reject {
			color: #f00;
		}
	}

	.top {
		padding: 20rpx 20rpx;
	}

	.upload {
		height: 880rpx;
		margin-top: 30rpx;

		.title {
			color: #C8C8C8;
			margin-top: 60rpx;
		}
	}

	.imgs {
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;

		image {
			width: 280rpx;
			height: 280rpx;
		}
	}

	.desc {
		margin-top: 30rpx;
		display: flex;
		justify-content: flex-start;

		.text {
			color: #C8C8C8;
			font-size: 12px;
		}
	}

	::v-deep .uni-forms-item__label {
		width: 160rpx !important;
		font-size: 15px;
		font-weight: 600;
	}

	.btn {
		width: 90%;
		height: 75rpx;
		line-height: 75rpx;
		border-radius: 30rpx;
		font-size: 15px;
		font-weight: 500;
		background-color: #4AAEFF;
		margin-top: 150rpx;
		margin-bottom: 80rpx;
	}

	.tip {
		width: 48rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}

	.input-title {
		vertical-align: top;
	}
</style>
