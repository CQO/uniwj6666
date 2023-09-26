<template>
	<view class="gal-sloading gal-flex gal-columns gal-justify-content-center gal-align-items-center" 
	v-if="status == 1" 
	@tap.stop="stopfun"
	@touchmove.stop.prevent="stopfun" 
	:style="{background:background}">
		<view class="gal-flex gal-rows gal-wrap gal-sloading-body"
		:style="{
			width:(2*size)+'rpx',
			height:(2*size)+'rpx'
		}">
			<view 
			v-for="(item, idx) in 4" :key="idx"
			:class="['rush'+(idx+1)]" 
			:style="{
				width:size+'rpx',
				height:size+'rpx',
				background:colors[idx]
			}"></view>
		</view>
		<view class="gal-sloading-text gal-color-gray">{{title}}</view>
		<view style="height:100rpx;"></view>
	</view>
</template>
<script>
export default{
	props:{
		size:{type:Number, default:50},
		colors : {
			type:Array,
			default:function () {
				return ['#FF6347', '#D6FF7F', '#9055FF', '#c4d8f0']
			}
		},
		background:{
			type:String,
			default:'rgba(255,255,255,0.92)'
		},
		title:{
			type:String,
			default:'loading ...'
		}
	},
	data() {
		return {
			status : 1
		}
	},
	methods:{
		stop    : function () {
			this.status = 2;
		},
		loading : function () {
			this.status = 1;
		},
		stopfun : function(e){e.stopPropagation(); return null;}
	}
}
</script>
<style scoped>
.gal-sloading{
	width:100%; height:100vh; 
	position:fixed; z-index:9999; left:0; top:0; bottom:0; 
}
.gal-sloading-body{position:relative;}
.gal-sloading-body > view{border-radius:100%;}
.gal-sloading-text{line-height:60rpx; text-align:center; font-size:22rpx; margin-top:28rpx;}
.rush1{animation: rush1 4s infinite;}
.rush2{animation: rush2 4s infinite;}
.rush3{animation: rush3 4s infinite;}
.rush4{animation: rush4 4s infinite;}
@keyframes rush1 {
  from {
    transform: translate(0);
  }
  25% {
    transform: translate(100%);
  }
  50% {
    transform: translate(100%, 100%);
  }
  75% {
    transform: translate(0, 100%);
  }
}

@keyframes rush2 {
  from {
    transform: translate(0);
  }

  25% {
    transform: translate(0, 100%);
  }

  50% {
    transform: translate(-100%, 100%);
  }

  75% {
    transform: translate(-100%, 0);
  }
}

@keyframes rush3 {
  from {
    transform: translate(0);
  }

  25% {
    transform: translate(0, -100%);
  }

  50% {
    transform: translate(100%, -100%);
  }

  75% {
    transform: translate(100%, 0);
  }
}

@keyframes rush4 {
  from {
    transform: translate(0);
  }

  25% {
    transform: translate(-100%, 0);
  }

  50% {
    transform: translate(-100%, -100%);
  }

  75% {
    transform: translate(0, -100%);
  }
}

@keyframes backColor {
  from {
    background-color: #82466e;
  }
  25% {
    background-color: #425e82;
  }
  50% {
    background-color: #826f4d;
  }
  75% {
    background-color: #5e825a;
  }
}
</style>
