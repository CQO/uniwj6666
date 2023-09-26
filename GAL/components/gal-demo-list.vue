<template>
	<view>
		<view class="demo-list"
		v-for="(item, idx) in pageList" :key="idx">
			<view class="gal-flex gal-rows">
				<text class="demo-title gal-color-gray gal-h5">{{item.title}}</text>
				<text class="gal-text-small gal-text-small-ml gal-color-gray">{{item.desc}}</text>
			</view>
			<navigator class="demo-list-cell gal-flex gal-rows gal-space-between gal-bg-gray gal-border-radius" 
			v-for="(nav, index) in item.pages" :key="index" :url="nav[1]">
				<text class="demo-list-cell-title">{{(index+1)}}. {{nav[0]}}</text>
				<text class="demo-list-cell-arrow gal-text-small-ml gal-color-gray-light gal-icons">&#xe601;</text>
			</navigator>
			<view class="demo-list-space"></view>
		</view>
	</view>
</template>
<script>
export default{
	props:{
		pageList:{type:Array, default:function(){return [];}}
	}
}
</script>
<style scoped>
.demo-list{}
.demo-title{line-height:50rpx;}
.demo-list-cell{padding-left:20rpx; padding-right:20rpx; padding-top:20rpx; padding-bottom:20rpx; margin-top:25rpx;}
.demo-list-cell-title{line-height:50rpx; font-size:26rpx;}
.demo-list-cell-arrow{line-height:50rpx; font-size:36rpx;}
.gal-text-small-ml{margin-left:20rpx; margin-top:8rpx; line-height:38rpx;}
.demo-list-space{height:66rpx;}
</style>