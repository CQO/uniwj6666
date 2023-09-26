<template>
	<view class="main">
		<ds-navbar :left="true"></ds-navbar>
 
 
		<view class="category-nav">
			<view class="f20">走进东方</view>
			<u-divider text="DONG FANG ZHENG QUAN"></u-divider>
			<view class="small">专业、进取、有温度、值得信赖！</view>
		</view>
		<view class="category-about">
			<view class="icon"><uni-icons type="shop" size="48" color="#CC4547"></uni-icons></view>
			<view class="title">网站介绍</view>
			<view class="desc">中信証券股份有限公司（上交所：600030、港交所：06030），簡稱中信証券，經營中國大陸的證券業務，包括代理證券買賣、還本付息、分紅派息、登記開戶、保管、鑒證、承銷、投資諮詢、客戶資產管理等。公司母公司是中國中信股份有限公司，註冊地設在廣東省深圳市福田區。

中信証券在2003年於上海證券交易所上市，是上證50指數成份股之一，也一直是A50中國基金的十大成份股之一。

中信証券是中國規模最大和最具競爭力的證券公司，截至2020年12月31日，公司總資產11,691.39億元，淨資產1,874.06億元，淨利潤121.98億元。2013年底，中信証券旗下經紀業務、股票承銷業務、債券承銷業務均排名第一，控股華夏基金公司管理資產5048.58億元，同樣排名第一
			</view>
			<image src="../../static/images/a1.png" mode="widthFix"></image>
			<view class="icon"><uni-icons type="vip-filled" size="48" color="#CC4547"></uni-icons></view>
			<view class="title">品牌故事</view>
			<view class="desc">
				中信证券股份有限公司（以下简称“公司”）是一家经中国证券监督管理委员会批准设立的综合类证券公司，其前身是于1998年3月9日开业的聚赢快线有限责任公司，总部设在上海，现有注册资本人民币69.94亿元。公司于2015年3月23日成功登陆上交所（证券代码：600958），2016年7月8日H股成功发行并上市（股份代号：03958），成为行业内第五家A+H股上市券商。
				
				>2900
				总资产（亿）
				>6000
				员工（人）
				177
				分支机构（家）
				经过20余年的发展，公司从一家仅有586名员工、36家营业网点的证券公司，逐渐壮大为一家总资产达2900亿，净资产超过600亿，员工6000余人、在全国87个城市设有177家分支机构，提供证券、期货、资产管理、理财、投行、投资咨询及证券研究等全方位、一站式专业综合金融服务的上市证券金融控股集团。
				
				公司全资持有上海东证期货有限公司、上海聚赢快线资产管理有限公司、上海聚赢快线资本投资有限公司、东方金融控股（香港）有限公司、上海聚赢快线创新投资有限公司、聚赢快线承销保荐有限公司，同时作为第一大股东参股汇添富基金管理股份有限公司。
				
				公司将继续秉承“团结 进取 务实 高效”的企业精神，致力于“成为具有行业一流核心竞争力、为客户提供综合金融服务的现代投资银行”。
			</view>
			<image src="../../static/images/a2.png" mode="widthFix"></image>
		</view>	
 
		<uni-popup ref="drawer" type="right">
			<view class="drawer">
				<view style="height: 120rpx;"></view>
				<view class="item">{{this.$t('about.sy')}}</view>
				<view class="item">公司简介</view>
				<view class="item">{{this.$t('about.xwzx')}}</view>
				<view class="item">{{this.$t('about.grzx')}}</view>
				<view class="item">{{this.$t('about.lxwm')}}</view>
				<image src="../../static/images/logo_gray.png" mode="widthFix" class="drawer-logo"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				current: 0,
				info: [],
				notice: '',
				lists: [],
				swiper1: [],
				swiper2: []
			}
		},
		components: {
			DsNavbar
		},
		mounted() {
			//uni.clearStorage()
			this.getLists()
			this.getNotice()
			this.getSwiper()
		},
		methods: {
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

<style scoped>
	.main {
		min-height: 100vh;
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
	.category-about{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 20rpx 0;
		background-color: #f17074;
		padding: 30rpx;
	}
	.category-about .title{
		font-size: 18px;
		font-weight: bold;
		margin: 15rpx 0;
	}
	.category-about .icon{
		margin-top:45rpx;
	}
	.category-about .desc{
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
</style>
