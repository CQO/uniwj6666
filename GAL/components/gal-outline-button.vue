<template>
	<view 
	class="gal-outline-button" 
	:style="{
		width:size[0]+'rpx',
		height:size[1]+'rpx',
		background:background
	}" @tap="btnTap">
		<view class="gal-outline-button-line gal-outline-button-animate0"
		:style="{
			left:'0px',
			bottom:'-100%',
			height:size[1]+'rpx',
			width:size[2]+'rpx',
			background:'linear-gradient(to top, transparent, '+lineColors[0]+')'
		}"></view>
		<view class="gal-outline-button-line gal-outline-button-animate1" 
		:style="{
			left:'-100%',
			top:'0px',
			height:size[2]+'rpx',
			width:size[0]+'rpx',
			background:'linear-gradient(to right, transparent, '+lineColors[1]+')'
		}"></view>
		<view class="gal-outline-button-line gal-outline-button-animate2"
		:style="{
			right:'0px',
			top:'-100%',
			height:size[1]+'rpx',
			width:size[2]+'rpx',
			background:'linear-gradient(to bottom, transparent, '+lineColors[2]+')'
		}"></view>
		<view class="gal-outline-button-line gal-outline-button-animate3" 
		:style="{
			right:'-100%',
			bottom:'0px',
			height:size[2]+'rpx',
			width:size[0]+'rpx',
			background:'linear-gradient(to right, '+lineColors[3]+', transparent)'
		}"></view>
		<view class="gal-flex gal-rows gal-nowrap gal-justify-content-center gal-align-items-center">
			<slot name="title"></slot>
		</view>
		<view class="gal-outline-button-real" 
		@tap.stop="stopfun" 
		v-if="haveButton" 
		:style="{
			width:size[0]+'rpx',
			height:size[1]+'rpx'
		}">
			<slot name="realBtn"></slot>
		</view>
	</view>
</template>
<script>
export default{
	props:{
		size:{
			type:Array,
			default:function(){return [260,88,4]}
		},
		background:{
			type:String,
			default : ''
		},
		lineColors:{
			type:Array,
			default :function(){return ['#03e9f5', '#03e9f5', '#03e9f5','#03e9f5'];}
		},
		haveButton : {
			type:Boolean,
			default:false
		}
	},
	methods:{
		stopfun : function(e){e.stopPropagation(); return null;}
	}
}
</script>
<style scoped>
.gal-outline-button{position:relative; overflow:hidden;}
.gal-outline-button-line{position:absolute; z-index:1;}
.gal-outline-button-real{position:absolute; z-index:2; opacity:0; top:0; left:0;}

.gal-outline-button-animate0{animation:gal-outline-button-animate0 1.5s infinite; animation-delay: .75s}
@keyframes gal-outline-button-animate0{  0% { bottom: -100%; }  50%,100% {  bottom: 100%; }}
.gal-outline-button-animate1{animation:gal-outline-button-animate1 1.5s infinite;}
@keyframes gal-outline-button-animate1{  0% { left: -100%; }  50%,100% {  left: 100%; }}
.gal-outline-button-animate2{animation:gal-outline-button-animate2 1.5s infinite; animation-delay:.25s;}
@keyframes gal-outline-button-animate2{  0% { top: -100%; }  50%,100% {  top: 100%; }}
.gal-outline-button-animate3{animation:gal-outline-button-animate3 1.5s infinite; animation-delay:.5s;}
@keyframes gal-outline-button-animate3{  0% { right: -100%; }  50%,100% {  right: 100%; }}
</style>
