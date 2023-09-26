// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	let url = vm.$baseUrl()
	let xtoken = uni.getStorageSync("xtoken")
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		// config.baseURL = url; /* 根域名 */
		config.baseURL = url; /* 根域名 */
		config.custom = {
			auth: false
		}
		config.header = {
			'content-type': 'application/json',
			'xtoken': xtoken
		}
		
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		//config.header.token = vm.vuex_token
		let xtoken = uni.getStorageSync("xtoken")
		if (xtoken) {
			config.header.xtoken = xtoken
		}
		if (config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.token = vm.vuex_token
			//config.header.token = vm.$store.state.userInfo.token
		}
		config.url = config.url + '?lang=' + (uni.getStorageSync('lang') || 'zh-cn')
		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data

		// console.log(data);

		// 自定义参数
		const custom = response.config?.custom
		if (data.type < 0 && data.type != -1) {
			uni.$u.toast(data.msg)
			 if(data.type == -1001 || data.type == -1002){
			uni.navigateTo({
				url: '/pages/my/login'
			})
			 }
		}
		if (data.type == -1) {
			uni.$u.toast(data.msg)
		}
		return data
	}, (response) => {
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
