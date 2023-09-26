<template>
	<view style="padding: 20rpx;">
		<view class="" v-html='$t("privacyPolicy.yszcjs")'></view>		
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
				title: this.$t('privacyPolicy.yszc')
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
