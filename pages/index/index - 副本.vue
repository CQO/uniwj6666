<template>
	<view class="main">
		<!-- <ds-navbar :left="true"></ds-navbar> -->

		<u-navbar :title="this.$t('tabbar.sy')" placeholder :autoBack="false" leftIcon="" rightIcon="server-fill"
			@rightClick="getlink(2,'/pages/chat/index')">
			<view class="u-nav-slot" slot="left">
				<view class="" @click='langShow = true'>
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
					<u-swiper :list="swiperlist" indicator circular radius="12rpx"></u-swiper>
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

		<!-- 		<swiper :indicator-dots="true" indicator-active-color="#E31F26" class="swiper">
			<swiper-item>
				<image src="../../static/images/lb01.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/lb02.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/lb03.png"></image>
			</swiper-item>
		</swiper>
		<view class="notice">
			<uni-icons type="notification-filled" size="36" color="#E31F26" style="margin-left: 20rpx;"></uni-icons>
			<uni-notice-bar color="#333333" background-color="rgba(255,255,255,0)" :single="true" :text="notice"
				scrollable style="margin: 0;"></uni-notice-bar>
		</view> -->

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
		<view class="" style="display: none;">
			<view class="category-box">
				<navigator class="item" hover-class="none" url="./about">Fx Solutions</navigator>
				<navigator class="item" hover-class="none" url="../news/index">新闻中心</navigator>
				<navigator class="item" hover-class="none" url="../info/index" open-type="switchTab">东方产品</navigator>
			</view>
			<view class="category-nav">
				<view class="f20">走进东方</view>
				<u-divider text="DONG FANG ZHENG QUAN"></u-divider>
				<view class="small">专业、进取、有温度、值得信赖！</view>
			</view>
			<view class="category-about">
				<view class="icon">
					<uni-icons type="shop" size="48" color="#CC4547"></uni-icons>
				</view>
				<view class="title">网站介绍</view>
				<view class="desc">Fx Solutions股份有限公司(以下简称"公司")是一家经中国证券监督管理委员会批准设立的综合类证券公司，其前身是于1998年3月9日开业的Fx
					Solutions有限责任公司，
					总部设在上海，现有注册资本69.94亿元，公司于2015年3月23日成功登陆上交所（600958），2016年7月8日H股成功发行并上市（03958），成为行业内第五家A+H股上市券商。.
				</view>
				<image src="../../static/images/a1.png" mode="widthFix"></image>
				<view class="icon">
					<uni-icons type="vip-filled" size="48" color="#CC4547"></uni-icons>
				</view>
				<view class="title">品牌故事</view>
				<view class="desc">
					Fx Solutions股份有限公司（以下简称“公司”）是一家经中国证券监督管理委员会批准设立的综合类证券公司，其前身是于1998年3月9日开业的Fx
					Solutions有限责任公司，总部设在上海，现有注册资本人民币69.94亿元。公司于2015年3月23日成功登陆上交所（证券代码：600958），2016年7月8日H股成功发行并上市（股份代号：03958），成为行业内第五家A+H股上市券商。

					>2900
					总资产（亿）
					>6000
					员工（人）
					177
					分支机构（家）
					经过20余年的发展，公司从一家仅有586名员工、36家营业网点的证券公司，逐渐壮大为一家总资产达2900亿，净资产超过600亿，员工6000余人、在全国87个城市设有177家分支机构，提供证券、期货、资产管理、理财、投行、投资咨询及证券研究等全方位、一站式专业综合金融服务的上市证券金融控股集团。

					公司全资持有上海东证期货有限公司、上海Fx Solutions资产管理有限公司、上海Fx Solutions资本投资有限公司、东方金融控股（香港）有限公司、上海Fx
					Solutions创新投资有限公司、Fx Solutions承销保荐有限公司，同时作为第一大股东参股汇添富基金管理股份有限公司。

					公司将继续秉承“团结 进取 务实 高效”的企业精神，致力于“成为具有行业一流核心竞争力、为客户提供综合金融服务的现代投资银行”。
				</view>
				<image src="../../static/images/a2.png" mode="widthFix"></image>
			</view>

		</view>

		<div style="display: none;">
			<view class="category-nav">
				<view class="f20">新闻中心</view>
				<u-divider text="NEWS CENTER"></u-divider>
			</view>
			<view class="ul">
				<navigator class="li" v-for="(item,index) in lists" :key="index" hover-class="none"
					:url="'../news/show?id='+item.nid">
					<view class="date">
						<text class="f16 month">{{$u.timeFormat(item.ntime, 'mm')}}</text>
						<view class="line"></view>
						<text class="f16 day">{{$u.timeFormat(item.ntime, 'dd')}}</text>
					</view>
					<text class="title">{{item.ntitle}}</text>
				</navigator>
			</view>
			<uni-popup ref="drawer" type="right">
				<view class="drawer">
					<view style="height: 120rpx;"></view>
					<view class="item">首页</view>
					<view class="item">公司简介</view>
					<view class="item">新闻资讯</view>
					<view class="item">个人中心</view>
					<view class="item">联系我们</view>
					<image src="../../static/images/logo_gray.png" mode="widthFix" class="drawer-logo"></image>
				</view>
			</uni-popup>
		</div>

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
				goods: '',
				swiperlist: [
					'../../static/images/lb01.png',
					'../../static/images/lb02.png',
					'../../static/images/lb03.png',
				],
				// iconList: [{
				// 		img: '../../static/images/stock.png',
				// 		title: '产品中心',
				// 		url: '/pages/info/index'
				// 	},
				// 	{
				// 		img: '../../static/images/usercenter1.png',
				// 		title: '个人中心',
				// 		url: '/pages/my/index'
				// 	}
				// 	// {
				// 	// 	img: '../../static/images/contact1.png',
				// 	// 	title: '联系客服',
				// 	// 	url: '/pages/chat/index'
				// 	// }
				// ],
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
			//uni.clearStorage()
			this.getCategory()
			this.getLists()
			this.getNotice()
			this.getSwiper()
			this.newlist()
			this.newonelist()
		},
		onLoad() {
			this.newonelist()
			this.newlist()
		},
		created() {
			this.newonelist()
			this.newlist()
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
					}
					// {
					// 	img: '../../static/images/contact1.png',
					// 	title: '联系客服',
					// 	url: '/pages/chat/index'
					// }
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
				let res = await uni.$u.http.post('http://w.ceshi963.top/index/yii/prosshow.html', {
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
					url: 'https://classify-ws.jin10.com:5142/flash?channel=-8200&vip=1&classify=%5B29%5D&t=1669595614095',
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
	.red {
		color: #cf1b24;
	}

	.green {
		color: #008000;
	}

	.hangqing {
		background: #fff;
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
		background: #fff;
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
						color: #000000;
						font-weight: 500;
						letter-spacing: 2rpx;
					}
				}
			}
		}
	}


	.newmain {
		background: #fff;
		border-radius: 20rpx;

		.newmain_nei {
			width: 94%;
			margin: 0 auto;

			.tabselct {
				padding-bottom: 40rpx;
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
						color: #000;
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
						color: #000;
						font-size: 30rpx;
					}
				}
			}
		}
	}

	.main {
		min-height: 100vh;
		background: #efefef;


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
		background-color: #fff;
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
		color: #fff;
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
