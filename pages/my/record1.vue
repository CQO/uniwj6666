<template>
	<view class="main">
		<!-- <ds-navbar :left="true"></ds-navbar> -->
		<u-navbar :title="$t('tabbar.mx')" placeholder :autoBack="false">
		</u-navbar>
		<view class="bg-white flex" style="padding: 30rpx 0;">
			<u-tabs :list="list1" lineWidth="20" lineHeight="7"
				:activeStyle="{color: '#fff',fontWeight: 'bold',transform: 'scale(1.15)'}"
				:inactiveStyle="{color: '#eee',transform: 'scale(1)'}"
				itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="click" :scrollable="false">
			</u-tabs>
		</view>
		<gal-css-animate :animateName="animateName" duration="1s" timingFunction="ease-in">
			<view class="lists" v-for="(item,index) in lists" :key="index"
				v-if="(item.bptype==3 ||  item.bptype==1) && current==0">
				<view class="lists_nei">
					<view class="flex justify-between align-center lists_top">
						<text>{{$t('record.czje')}}：{{item.bpprice}}</text>
						<view v-if="(item.isverified==0 )">
							<text class="orange">{{$t('record.zt')}}：{{$t('record.shz')}}</text>
						</view>
						<view v-if="(item.isverified==1 )">
							<text class="green">{{$t('record.zt')}}：{{$t('record.ytg')}}</text>
						</view>
						<view v-if="(item.isverified==2 )">
							<text class="red">{{$t('record.zt')}}：{{$t('record.wtg')}}</text>
						</view>
					</view>
					<view class="lists_time">{{$t('record.sj')}}：{{$u.timeFormat(item.bptime, 'yyyy-mm-dd hh:MM:ss')}}</view>
				</view>
			</view>
		</gal-css-animate>
		<gal-css-animate :animateName="animateName" duration="1s" timingFunction="ease-in">
			<view class="lists" v-for="(item,index) in lists" :key="index" v-if="item.bptype==0 && current==1">
				<view class="lists_nei">
					<view class="flex justify-between  align-center lists_top">
						<text class="green">{{$t('record.txje')}}：{{item.bpprice}}</text>
						<view v-if="(item.isverified==0 )">
							<text class="orange">{{$t('record.zt')}}：{{$t('record.shz')}}</text>
						</view>
						<view v-if="(item.isverified==1 )">
							<text class="green">{{$t('record.zt')}}：{{$t('record.ytg')}}</text>
						</view>
						<view v-if="(item.isverified==2 )">
							<text class="red">{{$t('record.zt')}}：{{$t('record.wtg')}}</text>
						</view>
					</view>
					<view v-if="(item.isverified==2 )"><text class="green">{{$t('record.bz')}}：{{item.cash_content}}</text></view>

					<view class="lists_time">{{$t('record.sj')}}：{{$u.timeFormat(item.bptime, 'yyyy-mm-dd hh:MM:ss')}}</view>
				</view>
			</view>
		</gal-css-animate>
		<view class="" v-if="lists.length == 0">
			<u-empty mode="data" :text='$t("record.sjwl")' icon="../../static/images/data.png">
			</u-empty>
		</view>
		<!-- <ds-tabbar :value="2"></ds-tabbar> -->
		
		<view class="" style='height: 100rpx;'></view>
		
		<!-- 底部导航栏 -->
		<tabbar :active='3' />
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	import DsTabbar from '../../components/ds/ds-tabbar.vue'
	export default {
		data() {
			return {
				list1: [{
					name: '充值记录',
				}, {
					name: '提现记录',
				}],
				lists: [],
				current: 0,
				animateName: 'jackInTheBox'
			}
		},
		components: {
			DsNavbar,
			DsTabbar
		},
		mounted() {
			this.getLists()
		},
		methods: {
			clickLeft() {
				uni.navigateBack({
					delta: 1
				})
			},
			click(item) {
				console.log('item', item);
				this.current = item.index
			},
			async getLists() {
				let res = await uni.$u.http.post('index/yii/user_cashlist.html', {
					uid: this.vuex_login
				})
				this.lists = res.data
			}
		}
	}
</script>
<style lang="scss" scoped>
	page, .main {
		min-height: 100vh;
		background: #000;
		color: #fff;
	}
	::v-deep .u-tabs__wrapper__nav__line{
		display: none !important;
	}
	.orange {
		color: orange;
	}

	.main {
		/* min-height: 100vh; */
	}

	.lists {
		width: 94%;
		margin: 0 auto;



		.lists_nei {
			margin-top: 40rpx;
			padding: 20rpx;
			background-color: #000;
			color: #fff;
			border-radius: 20rpx;
			box-shadow: 0px 2px 10px #fff;

			.lists_top {
				padding: 12rpx 0;
			}

			.lists_time {
				padding: 12rpx 0;
			}
		}
	}

	.lists .item {
		padding: 15rpx 20rpx;
		background-color: #000;
		color: #fff;
	}
</style>
