<template>
	<view class="gal-sbutton-in" 
	:class="[
	baseClass, 
	status == 1 ? defaultClass : '' ,
	status == 2 ? loadingClass : '' ,
	status == 3 ? successClass : '', 
	status >= 3 ? 'gal-btn-fade-in' : '', 
	status == 4 ? failClass : '',]">
		<view class="gal-sbutton" v-if="status == 1">
			<slot name="default"></slot>
		</view>
		<view class="gal-sbutton gal-flex gal-rows gal-nowrap gal-justify-content-center gal-align-items-center" 
		v-if="status == 2">
			<view ref="loadingPoints1" :class="[loaingPointClass, 'gal-sbutton-loading1']"></view>
			<view ref="loadingPoints2" :class="[loaingPointClass, 'gal-sbutton-loading2']"></view>
			<view ref="loadingPoints3" :class="[loaingPointClass, 'gal-sbutton-loading3']"></view>
		</view>
		<view class="gal-sbutton" v-if="status == 3">
			<slot name="success"></slot>
		</view>
		<view class="gal-sbutton" v-if="status == 4">
			<slot name="error"></slot>
		</view>
		<view class="gal-sbutton gal-sbutton-slot"><slot name="realBtn"></slot></view>
	</view>
</template>
<script>
export default{
	props   : {
		titleClass        : {type:String, default : 'gal-sbutton-text'},
		loaingPointClass  : {type:String, default : 'gal-sbutton-loading-point'},
		baseClass         : {type:String, default : 'gal-sbutton'},
		defaultClass      : {type:String, default : 'gal-sbutton-default'},
		loadingClass      : {type:String, default : 'gal-sbutton-loading'},
		successClass      : {type:String, default : 'gal-sbutton-success'},
		failClass         : {type:String, default : 'gal-sbutton-fail'}
	},
	data() {
		return {
			status         : 1,
			animateTimer   : 800,
			BindingXObjs   : [null,null,null],
			AnimateObjs    : [null,null,null],
			intervalID     : null
		}
	},
	methods : {
		reset : function () {
			this.status = 1;
		},
		loading : function () {
			this.status = 2;
		},
		success : function () {
			this.status = 3;
		},
		fail : function () {
			this.status = 4;
		}
	}
}
</script>
<style>
.gal-sbutton-in{position:relative; overflow:hidden;}
.gal-sbutton-slot{opacity:0; position:absolute; left:0; top:0; z-index:1;}
.gal-sbutton-loading1{animation:gal-sbutton-loading1 1200ms ease-in infinite;}
@keyframes gal-sbutton-loading1{
	0%{transform: translateY(0px);}
	25%{transform: translateY(2px);}
	100%{transform: translateY(0px);}
}
.gal-sbutton-loading2{animation:gal-sbutton-loading2 1200ms ease-in infinite;}
@keyframes gal-sbutton-loading2{
	0%{transform: translateY(0px);}
	25%{transform: translateY(0px);}
	50%{transform: translateY(2px);}
	75%{transform: translateY(2px);}
	100%{transform: translateY(0px);}
}
.gal-sbutton-loading3{animation:gal-sbutton-loading3 1200ms ease-in infinite;}
@keyframes gal-sbutton-loading3{
	0%{transform: translateY(0px);}
	25%{transform: translateY(0px);}
	50%{transform: translateY(0px);}
	75%{transform: translateY(2px);}
	100%{transform: translateY(0px);}
}
@keyframes gal-btn-fade-in{0%{opacity:0.5;} 100%{opacity:1;}}
.gal-btn-fade-in{animation:gal-btn-fade-in 350ms ease-in forwards;}
</style>
