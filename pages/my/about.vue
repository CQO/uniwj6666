<template>
	<view style="padding: 20rpx;">
		{{$t('about.gywmjs')}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('about.gywm')
			})
		},
		methods: {
			
		}
	}
</script>

<style>
page {
	background: #000;
	color: #fff;
}
</style>

