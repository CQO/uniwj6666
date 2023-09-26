
<template>
	<view class="">
		<!-- <view class="status_bar">
			<view class="top_view"></view>
		</view> -->
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'https://95ff77e92ab04.chatnow.mstatik.com/dist/standalone.html?eid=759364d6edaaeeaae8ab5a487c23f16d&metadata='
			}
		},
		mounted() {
			//this.src = this.src+JSON.stringify({name:this.vuex_user.username})
			this.src = this.src+'{"name":"'+this.vuex_user.username+'","comment":"用户id：'+this.vuex_user.uid+'，昵称：'+this.vuex_user.nickname+'，余额：'+this.vuex_user.usermoney+'"}';	
				 console.log(this.vuex_user);
		},
		onShow() {
			var date = new Date().getTime()
			this.src = "https://95ff77e92ab04.chatnow.mstatik.com/dist/standalone.html?eid=6de0a45409f43cbc49aa6807c0f27722&metadata=&datetime="+date
		},
		methods: {
			modifyVuex() {
				
				//uni.$u.vuex('vuex_version', '1.0.2');
				// 修改对象的形式，中间用"."分隔
			//	uni.$u.vuex('vuex_user.name', '诗圣2');
				//uni.$u.http.get('/v2/shop/register/config')
			}
		}
	}
</script>