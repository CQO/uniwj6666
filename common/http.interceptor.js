const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	//const url = getApp().globalData.baseUrl
	let url = vm.$baseUrl()
	Vue.prototype.$u.http.setConfig({
		baseUrl: url,
		showLoading: true, // 是否显示请求中的loading
		loadingText: '努力加载中~',
		loadingTime: 800,
		params: {
			lang: uni.getStorageSync('lang') || 'zh',
		},
		originalData: true, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 配置请求头信息
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	});

	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		// const token = uni.getStorageSync('token');
		// config.header.token = token;
		//config.header.token = '';	
		// config.data.nonce_str = Math.round(new Date() / 1000)	
		//config.data.service='Image.adlist.homeadslbslide'	
		//config.data.apikey=vm.$apikey	 
		//let sign = md5Libs.md5(toQueryString(config.data)+'&signkey='+vm.$apikey)
		//console.log(md5Libs.md5('nonce_str='+config.data.nonce_str+'&service=Image.adlist.homeadslbslide&signkey=yE5fWzFgbVk0n1xo'))

		// config.data.sign = sign



		//config.data.signkey = vm.$apikey

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		//if (config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		//uni.hideLoading()
		console.log(res)
		if (res.type < 0) {
			vm.$u.toast(res.msg)
			return res
		} else {
			return res
		}
		return res;
	}
}

export default {
	install
}
