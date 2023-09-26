<template>
	<view class="gal-flex gal-rows gal-wrap" 
	v-if="type == 'in'"
	:style="'justify-content:'+direction+'; '+ styleSet+''">
		<text class="gal-block-text" 
		v-for="(letter, idx) in textIn" :key="idx" 
		:style="{
			animation : 'gal-fade-in 300ms '+timingFunc+' forwards', 
			padding:letter=='' || letter==' ' ? '0 10rpx':''
		}">{{letter}}</text>
	</view>
	<view class="gal-flex gal-rows gal-wrap"
	v-else 
	:style="'justify-content:'+direction+'; '+ styleSet+''">
		<text class="gal-block-text" 
		v-for="(letter, idx) in textIn" :key="idx" 
		:style="{
			animation : idx == textIn.length - 1 ? 'gal-fade-out 300ms '+timingFunc+' forwards' : '', 
			padding:letter=='' || letter==' ' ? '0 10rpx':'' 
		}">{{letter}}</text>
	</view>
</template>
<script>
export default{
	props:{
		color      : {
			type    : String,
			default : '#232323'
		},
		speed      : {
			type : Number,
			default : 80
		},
		text       : {
			type    : String,
			default : ''
		},
		styleSet   : {
			type    : String,
			default : ''
		},
		direction  : {
			type    : String,
			default : 'center'
		},
		autoPlay   : {
			type    : Boolean,
			default : true
		},
		timingFunc : {
			type    : String,
			default : 'ease-in'
		},
		type       : {
			type    : String,
			default : 'in'
		}
	},
	data() {
		return {
			textIn : [],
			intervalId : null
		}
	},
	created:function(){
		if(this.autoPlay){ 
			this.textIn = this.text.split('');
			this.play();
		}
	},
	watch:{
		text:function(val){
			this.textIn = val.split('');
			this.play();
		}
	},
	methods:{
		pushText : function(index){
			if(index >= this.text.length){return ;}
			this.textIn.push(this.text[index]);
			setTimeout(()=>{this.pushText(index+1);}, this.speed);
		},
		popText : function(){
			if(this.textIn.length < 1){return ;}
			this.textIn.pop();
			setTimeout(()=>{this.popText();}, this.speed);
		},
		play : function () {
			if(this.type == 'in'){
				this.textIn = [];
				this.pushText(0);
			}else{
				this.popText();
			}
		},
		loop : function(timer){
			if(!timer){timer = 2000;}
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
