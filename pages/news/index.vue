<template>
	<view class="main">		
		<view class="box"> 
			<view class="ul">
				<navigator class="li" v-for="(item,index) in lists" :key="index" hover-class="none" :url="'./show?id='+item.nid">
					<image :src="$imgUrl(item.img)" class="thumb"></image>
					<view class="info">
						<view class="title">{{item.ntitle}}</view>
						<view>{{$u.timeFormat(item.ntime, 'yyyy-mm-dd')}}</view>
					</view>					
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import DsNavbar from '../../components/ds/ds-navbar.vue'
	export default {
		data() {
			return {
				lists: [], 
			}
		},
		components: {
			DsNavbar
		},
		mounted() {
			//uni.clearStorage()
			this.getLists() 
		},
		methods: {
 
			async getLists() {
				let res = await uni.$u.http.post('index/yii/newslists.html')
				console.log(res)
				this.lists = res.data
			} 
		}
	}
</script>
<style>
	 
</style>
<style scoped>
 
	.box {
		width:750rpx; 
		margin: 0 auto;
		
	}

	.box .box-t {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
	}

	.box .ul {
		padding:0 20rpx;
	}

	.box .ul .li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15rpx 0;
		background-color: #fff;
	}
	.box .ul .li .thumb{
		width: 240rpx;
		height: 180rpx;
		margin-right: 20rpx;
	}
	.box .ul .li .info{
		flex: 1;
	}
	.box .ul .li .title {
		flex: 1;
		margin-left: 8rpx;
		font-size: 16px;
		font-weight: 600;
		  /* overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap; */
	}
</style>
