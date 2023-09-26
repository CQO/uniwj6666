<template>
	<view class="gal-clock gal-flex gal-rows gal-nowrap gal-space-between">
		<view class="gal-flipper" 
		:style="{height:height+'rpx'}">
			<view class="gal-clock-top">
				<text class="gal-clock-text" v-if="!flippingH" 
				:style="{'line-height':(height-10)+'rpx'}">{{timerH}}</text>
			</view>
			<view class="gal-clock-bottom">
				<text class="gal-clock-text" :class="[flippingH?'gal-clock-rotate':'']">{{timerH}}</text>
			</view>
		</view>
		<view class="gal-clock-point" 
		:style="{'line-height':(height-18)+'rpx'}">:</view>
		<view class="gal-flipper" :style="{height:height+'rpx'}">
			<view class="gal-clock-top">
				<text class="gal-clock-text" v-if="!flippingI" 
				:style="{'line-height':(height-10)+'rpx'}">{{timerI}}</text>
			</view>
			<view class="gal-clock-bottom">
				<text class="gal-clock-text" :class="[flippingI?'gal-clock-rotate':'']">{{timerI}}</text>
			</view>
		</view>
		<view class="gal-clock-point" 
		:style="{'line-height':(height-18)+'rpx'}">:</view>
		<view class="gal-flipper" :style="{height:height+'rpx'}">
			<view class="gal-clock-top">
				<text class="gal-clock-text" v-if="!flippingS" 
				:style="{'line-height':(height-10)+'rpx'}">{{timerS}}</text>
			</view>
			<view class="gal-clock-bottom">
				<text class="gal-clock-text" :class="[flippingS?'gal-clock-rotate':'']">{{timerS}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	var GraceAnimation = require('../js/gal.js');
	export default {
		name: "gal-click",
		data() {
			return {
				timerH: '00',
				timerI: '00',
				timerS: '00',
				flippingS: false,
				flippingI: false,
				flippingH: false
			};
		},
		props: {
			height: {
				type: Number,
				default: 188
			},
			fontSize: {
				type: String,
				default: '120rpx'
			}
		},
		watch: {
			timerS: function(v) {
				setTimeout(() => {
					this.flippingS = true;
				}, 400);
				setTimeout(() => {
					this.flippingS = false;
				}, 1000);
			},
			timerI: function(v) {
				this.flippingI = true;
				setTimeout(() => {
					this.flippingI = false
				}, 600);
			},
			timerH: function(v) {
				this.flippingH = true;
				setTimeout(() => {
					this.flippingH = false
				}, 600);
			}
		},
		mounted: function() {
			var nowArr = GraceAnimation.now('array');
			this.timerH = nowArr[3];
			this.timerI = nowArr[4];
			this.timerS = nowArr[5];
			setInterval(() => {
				nowArr = GraceAnimation.now('array');
				this.timerH = nowArr[3];
				this.timerI = nowArr[4];
				this.timerS = nowArr[5];
			}, 1000);
		}
	}
</script>
<style scoped>
.gal-clock {
	padding: 0rpx;
}
.gal-flipper {
	position: relative;
	width: 26%;
	transform-style: preserve-3d;
}

.gal-clock-top,
.gal-clock-bottom {
	box-shadow: 0 6px 6px 1px rgba(0, 0, 0, 0.5), 0 2px 2px 1px rgba(255, 255, 255, 0.15);
	border-top: 5rpx solid rgb(102, 103, 110);
	border-bottom: 5rpx solid #000;
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: calc(50%);
	overflow: hidden;
}

.gal-clock-top {
	background-image: linear-gradient(rgb(48, 49, 53) 0%, rgb(56, 57, 62) 100%);
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}

.gal-clock-bottom {
	background-image: linear-gradient(rgb(57, 58, 63) 0%, rgb(65, 65, 71) 100%);
	border-bottom-left-radius: 20rpx;
	border-bottom-right-radius: 20rpx;
}

.gal-clock-text {
	font-size: 120rpx;
	display: block;
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 100%;
	text-align: center;
	color: #F8F9FA;
	font-weight: bold;
}

.gal-clock-bottom .gal-clock-text {
	line-height: 0;
}

.gal-clock-rotate {
	animation: gal-clock-rotate 600ms linear;
}

@keyframes gal-clock-rotate {
	0% {
		transform: rotateX(0);
		opacity: 1;
	}

	50% {
		transform: rotateX(-90deg);
		opacity: 0;
	}

	100% {
		transform: rotateX(-180deg);
		opacity: 1;
	}
}

.gal-clock-point {
	width: 30rpx;
	text-align: center;
	overflow: hidden;
	flex-shrink: 0;
	color: #F8F9FA;
	font-size: 120rpx;
	overflow: hidden;
}
</style>
