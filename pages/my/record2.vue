<template>
	<view class="main">
		<!-- <ds-navbar :left="true"></ds-navbar> -->
		<u-navbar :title="$t('record2.ccmx')" placeholder :autoBack="true" leftIconColor='#fff'>
		</u-navbar>
		<view class="bg-white flex" style="padding: 30rpx 0;margin-bottom: 20rpx;">
			<u-tabs :list="list1" lineWidth="20" lineHeight="7"
				:activeStyle="{color: '#fff',fontWeight: 'bold',transform: 'scale(1.15)'}"
				:inactiveStyle="{color: '#eee',transform: 'scale(1)'}"
				itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @click="click" :scrollable="false">
			</u-tabs>
		</view>
		<gal-css-animate :animateName="animateName" duration="1s" timingFunction="ease-in">
			<view class="listmain">
				<view class="lists" v-for="(item,index) in lists" :key="index" v-if="current==0">
					<view class="item">
						<view class="flex justify-between  align-center mb10">
							<text>{{item.ptitle}}</text>
							<view class="red " v-if="item.ostyle==0">
								<uni-icons type="arrow-up" size="16" color="#c41a1f"></uni-icons> {{$t('record2.mz')}} （￥{{item.fee}})
							</view>
							<view class="green " v-if="item.ostyle==1">
								<uni-icons type="arrow-down" size="16" style="color:#3EA971"></uni-icons> <text
									class="green" style="color:#3EA971">{{$t('record2.md')}}（￥{{item.fee}})
								</text>
							</view>
							<view v-if="item.ostyle==0">
								<text class="red">{{setPrice(item)}}</text>
							</view>
							<view v-if="item.ostyle==1">
								<text class="green" style="color:#3EA971">{{newsprice(item)}}</text>
							</view>
						</view>
						<view class="flex justify-between  align-center">
							<view>
								<view v-if="item.ostyle==0">{{item.buyprice}}-<text class="red">{{proprice[item.pid]}}
									</text>
								</view>
								<view v-if="item.ostyle==1">{{item.buyprice}}-<text class="green">{{proprice[item.pid]}}
									</text>
								</view>
								<!-- <text>{{$u.timeFormat(item.buytime, 'yyyy-mm-dd hh:MM:ss')}}</text> -->
							</view>
							<text>{{ daojishi(item)}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="" v-if="current==0 && lists.length == 0">
				<u-empty mode="data" icon="../../static/images/data.png">
				</u-empty>
			</view>
		</gal-css-animate>

		<gal-css-animate :animateName="animateName" duration="1s" timingFunction="ease-in">
			<view class="listmain">
				<view class="lists" v-for="(item,index) in lists2" :key="index" v-if="current==1 && lists2.length>0">
					<view class="item">
						<view class="flex justify-between  align-center mb10">
							<text>{{item.ptitle}}</text>
							<view class="red " v-if="item.ostyle==0">
								<uni-icons type="arrow-up" size="16" color="#c41a1f"></uni-icons> {{$t('record2.mz')}} （￥{{item.fee}})
							</view>
							<view class="green " v-if="item.ostyle==1">
								<uni-icons type="arrow-down" size="16" style="color:#3EA971"></uni-icons> <text
									class="green" style="color:#3EA971">{{$t('record2.md')}}（￥{{item.fee}})
								</text>
							</view>
							<view v-if="item.is_win==1">
								<text class="red">+{{item.ploss}}</text>
							</view>
							<view v-else-if="item.is_win==2">
								<text class="green" style="color:#3EA971">{{showPrice(item)}}</text>
							</view>
							<view v-else>
								<text>{{showPrice(item)}}</text>
							</view>
						</view>
						<view class="flex justify-between  align-center">
							<view>
								<view v-if="item.ostyle==0">{{item.buyprice}}-<text class="red">{{item.sellprice}}
									</text>
								</view>
								<view v-if="item.ostyle==1">{{item.buyprice}}-<text class="green">{{item.sellprice}}
									</text>
								</view>
								<!-- <text>{{$u.timeFormat(item.buytime, 'yyyy-mm-dd hh:MM:ss')}}</text> -->
							</view>
							<text>{{getLocalTime(item.selltime)}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="" v-if="current==1 && lists2.length == 0">
				<u-empty mode="data" icon="../../static/images/data.png">
				</u-empty>
			</view>
		</gal-css-animate>

		<!-- <ds-tabbar :value="2"></ds-tabbar> -->
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	import DsTabbar from '../../components/ds/ds-tabbar.vue'
	export default {
		data() {
			return {
				list1: [{
					name: this.$t('record2.ccmx')
				}, {
					name: this.$t('record2.lsmx')
				}],
				lists: [],
				lists2: [],
				proprice: {},
				current: 0,
				ftime: 0,
				timer: null,
				animateName: 'jackInTheBox'
			}
		},
		components: {
			DsNavbar,
			DsTabbar
		},
		onLoad() {
			this.getLists()
			this.getLists2()
			this.getPrice()
			this.timer = setInterval(() => {
				this.ftime++
				this.getPrice()
			}, 1000)
		},
		onUnload() {
			clearInterval(this.timer)
		},
		mounted() {

		},
		computed: {
			daojishi() {
				return function(item) {
					return this.formatSeconds2(this.endtime(item))
				}
			},
			newsprice() {
				return function(item) {
					return this.setPrice(item)
				}
			}
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
			showPrice(item) {
				if (item.is_win == 1) {
					return item.fee * (100 * 10 + item.endloss * 10) / 1000;
				} else if (item.is_win == 2) {
					return -(item.fee * item.lossrate) / 100;
				} else {
					return 0
				}
			},
			setPrice(item) {
				let closeprice = 0;
				let newprice = this.proprice[item.pid]
				let chaprice = newprice - item.buyprice
				if (chaprice > 0) {
					closeprice = item.fee * (100 * 10 + item.endloss * 10) / 1000
				} else if (chaprice < 0) {
					closeprice = -(item.fee * item.lossrate) / 100;
				} else {
					closeprice = item.fee;
				}
				return closeprice
			},
			endtime(item) {
				var timestamp = Date.parse(new Date()) / 1000;
				if (typeof(item.selltime) == "undefined") {
					item.selltime = 0
				}
				if (timestamp >= item.selltime) {
					// uni.$u.http.post('index/yii/goorder.html', {
					// 	oid: item.oid,
					// 	price: item.price,
					// 	order_rand: item.oid
					// })
					return 0
				}
				let shengyu = item.selltime * 1 - timestamp * 1
				var _end_time = (shengyu - this.ftime * 1);
				return shengyu--
			},
			async getPrice() {
				let res = await uni.$u.http.post('index/yii/user_get_price.html', {

				})
				this.proprice = res.data
			},
			async getLists2() {
				let res = await uni.$u.http.post('index/yii/user_orderlist.html', {
					uid: this.vuex_login
				})
				this.lists2 = res.data.data
			},
			async getLists() {
				let res = await uni.$u.http.post('index/yii/user_ajaxorder_list.html', {
					uid: this.vuex_login
				})
				this.lists = res.data
			},
			formatSeconds2(a) {
				var hh = parseInt(a / 3600);
				if (hh < 10) hh = "0" + hh;
				var mm = parseInt((a - hh * 3600) / 60);
				if (mm < 10) mm = "0" + mm;
				var ss = parseInt((a - hh * 3600) % 60);
				if (ss < 10) ss = "0" + ss;
				var length = hh + ":" + mm + ":" + ss;
				if (a > 0) {
					return length;
				} else {
					return "00:00:00";
				}
			},
			getLocalTime(nS) {
				var newDate = new Date();
				newDate.setTime(nS * 1000);

				Date.prototype.format = function(format) {
					var date = {
						"M+": this.getMonth() + 1,
						"d+": this.getDate(),
						"h+": this.getHours(),
						"m+": this.getMinutes(),
						"s+": this.getSeconds(),
						"q+": Math.floor((this.getMonth() + 3) / 3),
						"S+": this.getMilliseconds()
					};
					if (/(y+)/i.test(format)) {
						format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
					}
					for (var k in date) {
						if (new RegExp("(" + k + ")").test(format)) {
							if (RegExp.$1.length == 1 && date[k] < 10) {
								date[k] = '0' + date[k];
							}
							format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
								date[k] : ("00" + date[k]).substr(("" + date[k]).length));
						}
					}
					return format;
				}
				return newDate.format('yyyy-MM-dd h:m:s')
			}
		}
	}
</script>
<style lang="scss" scoped>
	page {
		background: #000;
		color: #fff;
	}
	::v-deep .u-tabs__wrapper__nav__line {
		display: none !important;
	}

	.main {
		min-height: 100vh;
	}

	.listmain {
		width: 94%;
		margin: 0 auto;

		.lists {
			border-radius: 20rpx;
			background-color: #000;
			margin-bottom: 30rpx;
			box-shadow: 0px 0px 11px #d5d5d5;
		}
	}


	.lists .item {
		padding: 15rpx 20rpx;
		border-top: #f5f5f5 1px solid;
	}
</style>
