<template>
	<view class="">
		<!-- #ifdef H5 -->
		<!-- #endif -->
		<!-- <web-view :src="src"></web-view> -->
		<iframe :src="src" frameborder="0"></iframe>
		<!-- <view class="" style='height: 100rpx;'></view> -->
		<!-- 底部导航栏 -->
		<!-- <tabbar :active='2' /> -->
	</view>
</template>

<script>
	// #ifdef APP-PLUS
	// 首先需要通过 uni.requireNativePlugin("ModuleName") 获取 module
	var testModule = uni.requireNativePlugin("MeiQia-ChatPlugin");
	// #endif
	export default {
		data() {
			return {
				src: 'https://cc.revolutr.cc/index.html'
			}
		},
		mounted() {
			//this.src = this.src+JSON.stringify({name:this.vuex_user.username})
			//this.src = this.src+'{"name":"'+this.vuex_user.username+'","comment":"用户id：'+this.vuex_user.uid+'，昵称：'+this.vuex_user.nickname+'，余额：'+this.vuex_user.usermoney+'"}';	
			// console.log(this.vuex_user);

			this.src = 'https://cc.revolutr.cc/index.html?name=' + this.vuex_user.username + '&id=' + this.vuex_user.uid +
				'&nickname=' + this.vuex_user.nickname + '&usermoney=' + this.vuex_user.usermoney

		},
		onShow() {
			//var date = new Date().getTime()
			//this.src = "https://43c0fd7f9ffa3.mstalk.cn/dist/standalone.html?eid=4a538bbe67ebd62f3731e3449ca99606&metadata=&datetime="+date
			// #ifdef APP-PLUS
			this.openMeiQiaChatView();
			// #endif
		},
		methods: {
			openMeiQiaChatView() {
				// 调用同步方法
				testModule.initChatViewManger()
				this.setPreSendProductCardMessage()
				this.enableSendVoiceMessage()
				this.configScheduledAgentId()
				this.configScheduledGroupId()
				this.configLoginCustomizedId()
				testModule.showMeiQiaChatView()
			},
			setPreSendProductCardMessage() {
				//发送商品卡片
				testModule.setPreSendProductCardMessage({
					pictureUrl: "https://file.pisen.com.cn/QJW3C1000WEB/Product/201701/16305409655404.jpg",
					title: "456456123",
					description: "描述的内容啊",
					productUrl: "https://meiqia.com",
					salesCount: 50
				});
			},
			enableSendVoiceMessage() {
				//是否语音
				testModule.enableSendVoiceMessage(false); // 默认支持				 
			},
			configScheduledAgentId() {
				//指定客服客服id			 
				testModule.setScheduledAgentId("625f3aa54e11be26320684b61ca8489a");
			},
			configScheduledGroupId() {
				//客服分组id	 
				testModule.setScheduledGroupId("625f3aa54e11be26320684b61ca8489a")
			},
			configLoginCustomizedId() {
				var date = new Date().getTime()
				testModule.setLoginCustomizedId(date);
			},
			configClientInfo() {
				testModule.setClientInfo({
					clientInfo: {
						comment:this.vuex_user.usermoney,
						id:this.vuex_user.id,
						name: this.vuex_user.nickname
					},
					override: true,
				});
			},
		}
	}
</script>
<style>
iframe {
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		/* height: calc(100vh - 100rpx); */
		/* padding-bottom: 100rpx; */
 }
</style>
