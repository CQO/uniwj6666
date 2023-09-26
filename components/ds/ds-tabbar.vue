<template>
	<view>
		<u-tabbar activeColor="#E31F26":value="value" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false">
			<u-tabbar-item @click="click1" text="首页">
				<image slot="active-icon"
					src="../../static/tabbar/tabbar1-1.png" class="icon"></image>
				<image slot="inactive-icon"
					src="../../static/tabbar/tabbar1.png" class="icon"></image>
			</u-tabbar-item>
			<u-tabbar-item  @click="click1" text="产品">
				<image slot="active-icon"
					src="../../static/tabbar/tabbar2-2.png" class="icon"></image>
				<image slot="inactive-icon"
					src="../../static/tabbar/tabbar2.png" class="icon"></image>
			</u-tabbar-item>
			<u-tabbar-item @click="click1" text="明细">
				<image slot="active-icon"
					src="../../static/tabbar/tabbar3-3.png" class="icon"></image>
				<image slot="inactive-icon"
					src="../../static/tabbar/tabbar3.png" class="icon"></image>
			</u-tabbar-item>
			<!-- <u-tabbar-item @click="click1" text="客服">
				<image slot="active-icon"
					src="../../static/tabbar/tabbar4-4.png" class="icon"></image>
				<image slot="inactive-icon"
					src="../../static/tabbar/tabbar4.png" class="icon"></image>
			</u-tabbar-item> -->
			<u-tabbar-item @click="click1" text="我的">
				<image slot="active-icon"
					src="../../static/tabbar/tabbar5-5.png" class="icon"></image>
				<image slot="inactive-icon"
					src="../../static/tabbar/tabbar5.png" class="icon"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {		 
				tabbar1: require('../../static/tabbar/tabbar1.png'),
				tabbar2: require('../../static/tabbar/tabbar2.png'),
			//	tabbar3: require('../../static/tabbar/tabbar3.png'),
				tabbar4: require('../../static/tabbar/tabbar4.png'),
				tabbar5: require('../../static/tabbar/tabbar5.png')
			}
		},
		props: {
			left: {
				type: Boolean,
				default: false
			},
			value:{
				type: Number,
				default: 0
			}
		},
		created() {
			
		},
		methods: {
			click1(e) {
				console.log('click1', e);
				if(e==0){
					uni.switchTab({
						url:'/pages/index/index'
					})
				}
				if(e==1){
					uni.switchTab({
						url:'/pages/info/index'
					})
				}
				if(e==2){
					uni.switchTab({
						url:'/pages/my/record1'
					})
				}
				if(e==3){
					uni.switchTab({
						url:'/pages/chat/index'
					})
				}
				if(e==4){
					uni.switchTab({
						url:'/pages/my/index'
					})
				}
			} 
		}
	}
</script>
<style scoped>
	.icon{
		width: 44rpx;
		height: 44rpx;
	} 
</style>
