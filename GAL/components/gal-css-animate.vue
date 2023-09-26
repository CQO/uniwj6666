<template>
	<view 
	:class="playing ? animateName : ''"
	:style="{
		'animation-duration'         : duration, 
		'animation-timing-function'  : timingFunction,
		'animation-fill-mode'        : fillMode,
		'animation-delay'            : delay,
		'animation-iteration-count'  : iterationCount
	}">
		<slot></slot>
	</view>
</template>
<script>
export default{
	props:{
		autoPlay        : {
			type    : Boolean,
			default : true
		},
		timingFunction : {
			type    : String,
			default : 'ease-in'
		},
		duration      : {
			type    : String,
			default : '1s'
		},
		animateName   : {
			type    : String,
			default : 'flash'
		},
		fillMode      : {
			type    : String,
			default : 'none'
		},
		delay         : {
			type    : String,
			default : '0ms'
		},
		iterationCount : {
			type    : [String, Number],
			default : 1
		}
	},
	data() {
		return {
			intervalId : null,
			playing    : false
		}
	},
	created:function(){
		if(this.autoPlay){this.play();}
	},
	mounted : function(){
		this.$emit('onMounted');
	},
	methods:{
		play : function () {
			this.playing = false;
			this.$nextTick(()=>{
				this.playing = true;
			});
		},
		loop : function(timer){
			if(!timer){timer = 200;}
			this.intervalId = setInterval(()=>{
				this.play();
			}, timer);
		},
		stop : function () {
			clearInterval(this.intervalId);
		}
	}
}
</script>
<style scoped>
</style>
