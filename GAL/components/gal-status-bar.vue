<template>
	<view :style="{height:height+'px', width:'100%'}">
		<view class="gal-status-bar"
		:style="{
			height:height+'px',
			opactiy:bgColor == '' ? 0 : 1,
			background:bgColor
		}"></view>
	</view>
</template>
<script>
export default{
	props:{
		bgColor:{
			type:String,
			default:''
		}
	},
	data() {
		return {
			height : 20
		}
	},
	created:function () {
		var system   = uni.getSystemInfoSync();
		this.height  = system.statusBarHeight;
	}
}
</script>
<style scoped>
.gal-status-bar{width:100%; height:20px; position:fixed; z-index:9999;}
</style>
