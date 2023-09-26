<template>
	<view>
		<uni-nav-bar backgroundColor="rgba(255,255,255,0)" leftWidth="275rpx" height="120rpx" :statusBar="true"
			:border="false" style="width: 100vw;z-index: 99999;" @clickLeft="clickLeft" fixed>
			<view slot="left" v-if="left">
				<image src="../../static/images/logo_small.png" mode="scaleToFill" class="left-icon"></image>
			</view>
			<view slot="right">
				<view class="tabmenu" @click="changMenu">
					<uni-icons type="bars" size="18" color="#ffffff"></uni-icons>
				</view>
			</view>
		</uni-nav-bar>
		<uni-popup ref="drawer" type="right">
			<view class="drawer">
				<view style="height: 120rpx;"></view>
				<navigator class="item" hover-class="none" open-type="switchTab" url="/pages/index/index">首页</navigator>
				<!-- <view class="item">公司简介</view> -->
				<navigator class="item" hover-class="none"  url="/pages/news/index">新闻资讯</navigator>
				<navigator class="item" hover-class="none" open-type="switchTab" url="/pages/my/index">个人中心</navigator>
			
				<navigator class="item" hover-class="none" open-type="switchTab" url="/pages/chat/index">联系我们</navigator>
				<image src="../../static/images/logo_gray.png" mode="widthFix" class="drawer-logo"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isopen:false
			}
		},
		props: {
			left: {
				type: Boolean,
				default: false
			}
		},
		mounted() {

		},
		methods: {
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			changMenu(){
				if(this.isopen){
					this.$refs.drawer.close()
				}else{
					this.$refs.drawer.open()
				}
				this.isopen = !this.isopen				
				
			}
		}
	}
</script>
<style scoped>
	.left-icon{
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

	.drawer {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		width: 400rpx;
		background-color: #fff;
	}

	.drawer .item {
		height: 120rpx;
		border-top: #f8f8f8 4px solid;
		display: flex;
		align-items: center;
		background-color: #fff;
		width: 100%;
		justify-content: center;
	}

	.drawer .drawer-logo {
		width: 320rpx;
		margin-top: 100rpx;
	}
</style>
