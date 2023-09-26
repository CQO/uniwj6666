<template>
	<view class="tabbar">
		<view class="list">
			<view class="list-container" v-for='(item, i) in tabbar' :key='i'>
				<view class="item" @click='jump(item)'>
					<view class="img">
						<image :src="item.selectedIconPath" v-if='active == i' mode=""></image>
						<image :src="item.iconPath" mode="" v-else></image>
					</view>
					<view class="text" :style='{color: active == i ? "#197af6" : ""}'>
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			active: {
				type: Number
			}
		},
		computed: {
			tabbar() {
				return [
					{
						"pagePath": "/pages/index/index",
						"iconPath": "/static/tabbar/shouye.png",
						"selectedIconPath": "/static/tabbar/shouye1.png",
						"text": this.$t('tabbar.sy')
					},
					{
						"pagePath": "/pages/info/index",
						"iconPath": "/static/tabbar/chanpin.png",
						"selectedIconPath": "/static/tabbar/chanpin1.png",
						"text": this.$t('tabbar.cp'),
					},
					// {
					// 	"pagePath": "/pages/chat/index",
					// 	"iconPath": "/static/tabbar/kefu.png",
					// 	"selectedIconPath": "/static/tabbar/kefu1.png",
					// 	"text": this.$t('tabbar.kf'),
					// },
					{
						"pagePath": "/pages/my/record1",
						"iconPath": "/static/tabbar/mingxi.png",
						"selectedIconPath": "/static/tabbar/mingxi1.png",
						"text": this.$t('tabbar.mx'),
					},
					{
						"pagePath": "/pages/my/index",
						"iconPath": "/static/tabbar/wode.png",
						"selectedIconPath": "/static/tabbar/wode1.png",
						"text": this.$t('tabbar.wd'),
					}
				]
			}
		},
		data() {
			return {

			}
		},
		methods: {
			jump(item) {
				console.log(item);
				uni.switchTab({
					url: item.pagePath
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
	.tabbar {
		height: 100rpx;
		position: fixed;
		z-index: 9999;
		right: 0;
		left: 0;
		bottom: 0;
		background: #000;
		color: #fff;

		.list {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;

			.list-container {
				width: 20%;
				text-align: center;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					.img {
						image {
							width: 40rpx;
							height: 40rpx;
							margin: 10rpx auto 0;
						}
					}

					.text {
						font-size: 22rpx;
						margin: 0 auto 10rpx;
					}
				}

				.midbutton {
					.img {
						height: 50rpx;
						background: #fff;
						margin: 0 auto;
						box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);
						border-radius: 100rpx 100rpx 0 0;
						transform: translateY(-30rpx);

						image {
							position: relative;
							z-index: 100;
							width: 100rpx;
							height: 100rpx;
							margin: 0;
						}

						.midbutton-bg {
							width: 120%;
							height: 50rpx;
							background: #fff;
							position: absolute;
							top: 30rpx;
							left: -10rpx;
							z-index: 99;
						}
					}

				}
			}
		}

	}
</style>
