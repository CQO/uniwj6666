<template>
	<view class="main">
		<!-- <ds-navbar :left="true"></ds-navbar> -->

		<u-navbar :title="this.$t('tabbar.sy')" placeholder :autoBack="false" leftIcon="" rightIcon="server-fill"
			@rightClick="getlink(2,'/pages/chat/index')">
			<view class="u-nav-slot" slot="left">
				<view class="" @click='langShow = true' style='color:#fff;'>
					{{language}}
				</view>
			</view>
		</u-navbar>

		<!-- 切换语言 -->
		<u-popup :show="langShow" @close="langShow = false" mode="center" round="10">
			<view class="popup">
				<view class="popup-title">
					<!-- {{$t('home.qxzyy')}} -->
					请选择语言
				</view>
				<view class="lang">
					<view class="lang-item" @click='changeLang("zh-cn")'>
						<image src="../../static/base/zh.png" mode="aspectFit"></image>
						<text>简体中文</text>
					</view>
					<view class="lang-item" @click='changeLang("zh-tw")'>
						<image src="../../static/base/zh.png" mode="aspectFit"></image>
						<text>繁體中文</text>
					</view>
					<view class="lang-item" @click='changeLang("en-us")'>
						<image src="../../static/base/en.png" mode="aspectFit"></image>
						<text>English</text>
					</view>
					<view class="lang-item" @click='changeLang("ry-rb")'>
						<image src="../../static/base/sp.png" mode="aspectFit"></image>
						<text>日本語</text>
					</view>
				</view>
			</view>
		</u-popup>



		<view class="hangqing">
			<view class="hangqingmain">
				<view class="everylist" v-for="(item,index) in goods" :key="index" v-if="index<3">
					<view class="names">{{item.ptitle}}</view>
					<view class="prices" :class="item.DiffRate < 0 ? 'red' : 'green'">
						{{item.Price}}
					</view>
					<view class="zhangfu">
						<text :class="item.DiffRate < 0 ? 'red' : 'green'">{{item.DiffRate}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="bankuitwo">
			<view class="bankuitwo_nei">
				<div class="noticemain">
					<u-notice-bar bgColor="#fff" color="#000" :text="notice" duration="10000" speed="40"></u-notice-bar>
				</div>
				<div class="swipermain">
					<!-- <u-swiper :list="swiperlist" indicator circular radius="12rpx"></u-swiper> -->
					<!--video src="https://apkfish.s3.ap-southeast-1.amazonaws.com/IMG_0279.MP4" autoplay="autoplay" style='width: 100%'></video!-->
				</div>
				<div class="threeicon">
					<div class="everylist" v-for="(item,index) in iconList" :key="index"
						@click="getlink(index,item.url)">
						<image :src="item.img" mode=""></image>
						<text>{{item.title}}</text>
					</div>
				</div>
			</view>
		</view>

		<view class="newmain">
			<view class="newmain_nei">
				<view class="tabselct">
					<u-tabs :list="tablist" @click="tabclick" :scrollable="false" lineWidth="30"></u-tabs>
				</view>
				<view class="newsone" v-if="tabidx == 0">
					<view class="newsone_every" v-for="(item,index) in newsonelists" :key="index"
						@click="getnewdetail(item.code)">
						<view class="item-times">{{$u.timeFormat(item.updateTime, 'yyyy-mm-dd hh:MM:ss')}}</view>
						<view class="titContent">
							{{item.digest}}
						</view>
						<view class="block-out">
							<view class="blocks">{{item.source}}</view>
						</view>
						<view class="neitu" v-if="item.imgUrl">
							<image :src="item.imgUrl">
							</image>
						</view>
					</view>
				</view>
				<view class="newstwo" v-else>
					<view class="newstwo_every" v-for="(item,index) in newsonelist" :key="index">
						
						<div class="item-times">{{item.time}}</div>
						<div class="titContent" style="-webkit-box-orient: vertical;">
							{{item.data.content}}
						</div>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="title" style='color: #fff; padding: 0 40rpx;'>
			产品列表
		</view>

		<view class="chanpinmain">
			<view class="chanpinmain_nei">


				<view class="listmain">
					<view class="everylist" v-for="(item,index) in goods.slice(0,5)" :key="index" @click="goto(item)">
						<view class="every">
							<view class="mingcheng">
								{{item.ptitle}}
							</view> -->
							
						<!-- </view>
						<view class="every">
							<view class="" :class="item.DiffRate < 0 ? 'red' : 'green'">
								{{item.Price}}
							</view>
							<view class="" style='color: #fff;'>
								{{$t('info.zd')}}:{{item.Low}}
							</view>
						</view>
						<view class="every">
							<view class="" :class="item.DiffRate < 0 ? 'red' : 'green'">
								{{item.DiffRate}}%
							</view>
							<view class="" style='color: #fff;'>
								{{$t('info.zg')}}:{{item.High}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
 -->
		<view class="" style='height: 100rpx;'></view>
		<!-- 底部导航栏 -->
		<tabbar :active='0' />
	</view>
</template>

<script>
	// import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				lang: uni.getStorageSync('lang') || 'zh-cn',
				langShow: false,

				current: 0,
				info: [],
				notice: '',
				lists: [],
				swiper1: [],
				swiper2: [],
				category: '',
				goods: [],
				swiperlist: [
					'../../static/images/lb01.png',
					'../../static/images/lb02.png',
					'../../static/images/lb03.png',
				],
				// tablist: [{
				// 	name: this.$t('index.xw'),
				// }, {
				// 	name: '7x24',
				// }, ],
				tabidx: 0,
				newsonelist: '',
				newsonelists: ''
			}
		},
		// components: {
		// 	DsNavbar
		// },
		onShow() {
			uni.hideTabBar()
			//uni.clearStorage()
			this.getCategory()
			this.getLists()
			this.getNotice()
			this.getSwiper()
			this.newlist()
			this.newonelist()
		},
		onLoad() {
			// this.newonelist()
			// this.newlist()
		},
		created() {
			// this.newonelist()
			// this.newlist()
		},
		computed: {
			iconList() {
				return [{
						img: '../../static/images/stock.png',
						title: this.$t('index.cpzx'),
						url: '/pages/info/index'
					},
					{
						img: '../../static/images/usercenter1.png',
						title: this.$t('index.grzx'),
						url: '/pages/my/index'
					},
					{
						img: '../../static/images/contact1.png',
						title: this.$t('index.lxwm'),
						url: '/pages/chat/index'
					}
				]
			},
			tablist() {
				return [{
					name: this.$t('index.xw'),
				}, {
					name: '7x24',
				}, ]
			},
			language() {
				let language = ''
				switch (this.lang) {
					case 'zh-cn':
						language = '简体中文'
						break
					case 'zh-tw':
						language = '繁體中文'
						break
					case 'en-us':
						language = 'English'
						break
					case 'ry-rb':
						language = '日本語'
						break
					default:
						language = '简体中文'
				}
				return language
			}
		},

		methods: {
			goto(item) {
				uni.navigateTo({
					url: '../buy/index?pid=' + item.pid
				})
			},
			changeLang(lang) {
				this.$i18n.locale = lang
				uni.setStorageSync('lang', lang)
				this.lang = lang
				this.langShow = false
			},
			getlink(index, val) {
				if (index == 2) {
					uni.navigateTo({
						url: val
					})
				} else {
					uni.switchTab({
						url: val
					})
				}

			},
			getnewdetail(val) {
				uni.navigateTo({
					url: '../news/show?id=' + val
				})
			},
			async getCategory() {
				let res = await uni.$u.http.post('index/yii/proclass.html')
				this.category = res.data
				this.getGoods(this.category[0])
			},
			async getGoods(item) {
				let res = await uni.$u.http.post('https://cc.revolutr.cc/index/yii/prosshow.html', {
					id: item.pcid
				})
				this.goods = res.data
				var that = this
				setTimeout(function() {
					that.getGoods(that.category[0])
				}, 2000);
			},
			newlist() {
				var that = this
				uni.request({
					url: 'http://45.207.43.1/chatlink.html',
					method: 'get',
					success(res) {
						that.newsonelist = res.data.data
					}
				})
			
			},
			async newonelist() {
				// var that = this
				// var xhr = new XMLHttpRequest();
				// xhr.addEventListener("readystatechange", function() {
				// 	if (this.readyState === 4) {
				// 		that.newsonelists = JSON.parse(this.responseText).items
				// 	}
				// });

				// xhr.open("GET",
				// 	"https://wp.yanshiba.top/index/api/news");

				// xhr.send();
				let res = await uni.$u.http.post('index/api/news', {})
				this.newsonelists = res.items

			},
			tabclick(item) {
				this.tabidx = item.index
			},
			change(e) {
				this.current = e.detail.current;
			},
			async getLists() {
				let res = await uni.$u.http.post('index/yii/newsinfo.html')
				console.log(res)
				this.lists = res.data[0]
				this.swiper1 = res.data[1]
				this.swiper2 = res.data[2]
				this.swiper2.forEach((item) => {
					this.info.push({
						content: item.ntitle
					})
				})
			},
			async getSwiper() {
				let res = await uni.$u.http.post('index/yii/swiper.html')
				this.swiper1 = res.data
			},
			async getNotice() {
				let res = await uni.$u.http.post('index/yii/noticeinfo.html')
				console.log(res)
				this.notice = res.data[0].ntitle
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-tabs__wrapper__nav__item__text {
		color: #fff !important;
	}

	.red {
		color: #cf1b24;
	}

	.green {
		color: #008000;
	}

	.hangqing {
		background: #000;
		margin-bottom: 30rpx;
		border-radius: 0 0 20rpx 20rpx;

		.hangqingmain {
			width: 94%;
			margin: 0 auto;
			padding: 20rpx 0 40rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.everylist {
				width: 26%;
				padding: 20rpx 20rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				background: #f8f8f8;
				border-radius: 20rpx;

				.names {
					font-size: 28rpx;
				}

				.prices {
					font-size: 32rpx;
					font-weight: 600;
					padding: 16rpx 0;
				}

				.zhangfu {
					font-size: 28rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					// text{
					// 	margin: 0 10rpx;
					// }
				}
			}
		}
	}

	.bankuitwo {
		background: #000;
		margin-bottom: 30rpx;
		border-radius: 20rpx;

		.bankuitwo_nei {
			width: 94%;
			margin: 0 auto;

			.noticemain {
				padding: 20rpx 0;
				padding-top: 40rpx;
			}

			.swipermain {
				padding-bottom: 40rpx;
			}

			.threeicon {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx 0 50rpx 0;

				.everylist {
					width: 33%;
					display: flex;
					flex-direction: column;
					align-items: center;

					image {
						width: 60rpx;
						height: 60rpx;
						margin-bottom: 10rpx;
					}

					text {
						font-size: 28rpx;
						color: #fff;
						font-weight: 500;
						letter-spacing: 2rpx;
					}
				}
			}
		}
	}

	.chanpinmain {
		background: #000;

		.chanpinmain_nei {
			width: 90%;
			margin: 0 auto;

			.headermain {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				font-size: 28rpx;
				// padding: 0 40rpx;

				text {
					width: 33%;
					text-align: left;
				}
			}

			.listmain {
				padding-top: 40rpx;

				.everylist {
					background: #000;
					padding: 40rpx;
					border-radius: 20rpx;
					margin-bottom: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.every {
						width: 33%;

						view {
							font-size: 28rpx;
							font-weight: 600;

							&:first-child {
								margin-bottom: 30rpx;
							}
						}

						.mingcheng {
							color: #fff;
						}
					}
				}
			}
		}
	}

	.newmain {
		background: #000;
		border-radius: 20rpx;

		.newmain_nei {
			width: 94%;
			margin: 0 auto;

			.tabselct {
				padding-bottom: 40rpx;
			}
			
			/deep/ .u-tabs__wrapper__nav__item__text {
				color: #fff !important;
			}
			
			.newsone {
				.newsone_every {
					display: flex;
					flex-direction: column;
					padding-bottom: 100rpx;

					.item-times {
						color: #999;
						margin-bottom: 14rpx;
						font-size: 26rpx;
					}

					.titContent {
						color: #fff;
						width: 100%;
						font-size: 30rpx;
						line-height: 1.5;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-box-orient: vertical;
						margin-bottom: 14rpx;
					}

					.block-out {
						margin-bottom: 30rpx;

						.blocks {
							width: auto;
							font-size: 28rpx;
							padding: 4rpx 15rpx;
							display: inline-block;
							border: 4rpx solid #41ac75;
							color: #41ac75;
						}
					}

					.neitu {
						width: 100%;

						image {
							width: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}

			.newstwo {
				display: flex;
				flex-direction: column;

				.newstwo_every {
					position: relative;
					border-left: 2rpx solid hsla(0, 0%, 75.3%, .8);
					padding: 0 20rpx 80rpx;

					&::before {
						content: '';
						position: absolute;
						top: 0;
						left: -8rpx;
						margin: auto;
						width: 16rpx;
						height: 16rpx;
						border-radius: 50%;
						background: #2979ff;
					}

					.item-times {
						color: #999;
						margin-bottom: 16rpx;
						font-size: 26rpx;
						margin-top: -10rpx;
					}

					.titContent {
						color: #fff;
						font-size: 30rpx;
					}
				}
			}
		}
	}

	.main {
		min-height: 100vh;
		background: #000;


	}

	.swiper {
		width: 700rpx;
		border-radius: 20rpx;
		overflow: hidden;
		height: 360rpx;
		margin: 0 auto;
	}

	.swiper image {
		width: 700rpx;
		height: 360rpx;
	}

	.swiper2 {
		width: 650rpx;
		height: 360rpx;
		margin: 0 auto;
	}

	.swiper2 image {
		width: 650rpx;
		height: 360rpx;
	}

	.notice {
		width: 700rpx;
		border-radius: 20rpx;
		margin: 30rpx auto;
		overflow: hidden;
		background-color: #000;
		display: flex;
		align-items: center;
		padding: 10rpx 0;
	}

	.category-box {
		width: 700rpx;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
	}

	.category-box .item {
		width: 32%;
		height: 82rpx;
		background-color: #E31F26;
		color: #000;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.category-nav {
		margin: 60rpx 30rpx 0 30rpx;
		text-align: center;

	}

	.category-nav .f20 {
		font-size: 64rpx;
	}

	.category-about {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 20rpx 0;
		background-color: #f17074;
		padding: 30rpx;
	}

	.category-about .title {
		font-size: 18px;
		font-weight: bold;
		margin: 15rpx 0;
	}

	.category-about .icon {
		margin-top: 45rpx;
	}

	.category-about .desc {
		margin-bottom: 20rpx;
	}

	.ul {
		padding: 0 20rpx;
	}

	.ul .li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
		height: 140rpx;
	}

	.ul .li:last-child {
		border-bottom: none
	}



	.ul .li .date {
		position: relative;
		width: 140rpx;
		height: 140rpx;
	}

	.ul .li .date .month {
		position: absolute;
		top: 30rpx;
		left: 20rpx;
	}

	.ul .li .date .day {
		position: absolute;
		bottom: 20rpx;
		right: 30rpx;
	}

	.ul .li .date .line {
		position: absolute;
		border-bottom: #D8CA9E 1px solid;
		transform: rotate(-45deg);
		left: 5%;
		width: 70%;
		top: 55%;
	}

	.ul .li .title {
		flex: 1;
		margin-left: 20rpx;
		font-size: 16px;
		display: -webkit-box;
		overflow: hidden;
		/*autoprefixer:off*/
		-webkit-box-orient: vertical;
		/*autoprefixer:on*/
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
	}

	.popup {
		width: 500rpx;
		padding: 20rpx;

		.popup-title {
			margin: 20rpx 0 30rpx;
			width: 100%;
			text-align: center;
		}

		.lang {
			width: 400rpx;
			margin: 10rpx auto 30rpx;
			border: 1px solid #ccc;
			border-radius: 20rpx;

			.lang-item {
				height: 80rpx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #ccc;
				font-size: 22rpx;

				image {
					width: 50rpx;
					margin: 0 20rpx;
				}

				&:last-child {
					border-bottom: none;
				}
			}
		}
	}
</style>
