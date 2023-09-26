<template>
	<view>
		<view :animation="animationData">
			<slot></slot>
		</view>
	</view>
</template>
<script>
export default{
	data() {
		return {
			animationData: {},
			animation : null
		}
	},
	mounted : function(){
		this.$emit('onMounted');
	},
	methods:{
		setData : function(data){
			this.animation = uni.createAnimation(data);
		},
		play : function(){
			this.animationData = this.animation.export();
		}
	}
}
</script>
<style>
</style>
