<template>
	<view 
	class="gal-praise-button gal-flex gal-rows gal-space-between gal-nowrap gal-align-items-center" 
	:class="[status == 3 ? 'gal-shake' : '']" 
	:style="{background:background, borderRadius:borderRadius, padding:padding}" 
	hover-class="gal-tap" @tap="tapme">
		<view class="gal-praise-iocn" 
		:class="[status == 2 ? 'gal-heartBeat' : '']">
			<text class="gal-icons" 
			:style="{color:color, fontSize:iconSize, lineHeight:iconSize}">&#xe63f;</text>
		</view>
		<view class="gal-praise-number">
			<text 
			:style="{color:color, fontSize:numberSize, lineHeight:numberSize}">{{number}}</text>
		</view>
	</view>
</template>
<script>
export default{
	props: {
		background : {
			type:String,
			default:'#FF0036'
		},
		color : {
			type:String,
			default:'#FFFFFF'
		},
		borderRadius : {
			type:String,
			default:'15rpx'
		},
		iconSize:{
			type:String,
			default:'38rpx'
		},
		numberSize:{
			type:String,
			default:'36rpx'
		},
		number : {
			type:[String, Number],
			default:'1.2w'
		},
		padding :{
			type:String,
			default:'20rpx'
		}
	},
	data() {
		return {
			status: 1
		}
	},
	methods:{
		loading:function(){
			this.status = 2;
		},
		stopLoading:function () {
			this.status = 3;
			setTimeout(()=>{
				this.status = 4;
			}, 1000);
		},
		tapme : function () {
			this.$emit('tapme');
		}
	}
}
</script>
<style scoped>
.gal-praise-button{padding:20rpx 10rpx; box-sizing: border-box;}
.gal-praise-iocn{width:28%; text-align:left;}
.gal-praise-number{width:60%; text-align:center; font-weight:bold;}
.gal-heartBeat{animation:heartBeat linear infinite 1s;}
.gal-shake{animation:shake linear 1s;}
</style>
