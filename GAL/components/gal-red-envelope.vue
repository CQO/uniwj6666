<template>
	<view class="redbag"
	:class="[
		animateStart ? 'redbag-animate' : '',
	]"
	:style="{
		left : left+'rpx',
		transform: 'rotate('+rotate+'deg)'
	}" @tap.stop="tapme">
		<image class="redbagImg" 
		:class="[
			taped        ? 'redbag-tap' : ''
		]"
		src="@/static/redbag.png" mode="widthFix"></image>
	</view>
</template>
<script>
export default {
	data() {
		return {
			left:0,
			animateStart : false,
			taped        : false,
			rotate       : 0
		}
	},
	created:function(){
		this.left   = parseInt(Math.random()*(600-30)+20,10);
		//this.rotate = this.intRand(0,15);
		// 产生一个随机延迟时间
		var timer = this.intRand(500, 3000);
		setTimeout(()=>{
			this.animateStart = true;
		}, timer);
	},
	methods: {
		tapme : function () {
			if(this.taped){return ;}
			this.taped = true;
			this.$emit('tapme');
		},
		intRand : function (min,max) {
			return parseInt(Math.random()*(max-min+1)+min,10);
		}
	}
}
</script>
<style scoped>
.redbag{width:138rpx; top:-200rpx; font-size:0rpx; position:absolute; z-index:8;}
.redbagImg{width:100%;}
.redbag-animate{animation:redbag-animate 8s ease-out;}
.redbag-tap{animation:redbag-tap 100ms linear forwards;}
@keyframes redbag-animate{
	from{top:-200rpx;}
	to{top:3000rpx;}
}
@keyframes redbag-tap {
	from{opacity:1;}
	to{opacity:0;}
}
</style>
