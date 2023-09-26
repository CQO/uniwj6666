<template>
	<view class="gal-animate-bg" 
	:style="{
		'background-image': 'linear-gradient('+bgColors+')',
		animation : 'gal-animate-bg '+speed+' linear infinite'
	}">
		<slot></slot>
	</view>
</template>
<script>
export default{
	props:{
		bgColors : {
			type    : String,
			default : '-45deg, #9055FF, #13E2DA  , #6699FF, #0B63F6'
		},
		speed : {
			type : String,
			default : '15s'
		}
	}
}
</script>
<style scoped>

</style>
