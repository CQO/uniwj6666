// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store';
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);
import uView from "uview-ui";
Vue.use(uView)

import i18n from './lang/index.js';

Vue.prototype.$baseUrl = function() {
	if (this.$u.os() == 'devtools') {
		return 'https://cc.revolutr.cc/'
	} else {
		// return 'http://114.117.248.138/'
		// return 'http://z.ceshiweb.vip/'
		return 'https://cc.revolutr.cc/'
	}
}
Vue.prototype.$imgUrl = function(src) {
	return 'https://cc.revolutr.cc/' + src
}
Vue.config.productionTip = false

import tabbar from './components/tabbar/index.vue'
Vue.component('tabbar', tabbar)


Vue.prototype.goByPath = function(path, params, skipType = 'navigate', animationType = 'pop-in', animationDuration =
	300) {
	if (skipType == 'navigate') {
		console.log(path, params)
		uni.navigateTo({
			url: path + "?params=" + encodeURIComponent(JSON.stringify(params)),
			animationType: animationType,
			animationDuration: animationDuration
		})
	} else {
		uni.redirectTo({
			url: path + "?params=" + encodeURIComponent(JSON.stringify(params)),
			animationType: animationType,
			animationDuration: animationDuration
		})
	}
}

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	...App
})
// 引入请求封装，将app参数传递到配置中
require('@/common/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
