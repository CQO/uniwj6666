const install = (Vue, vm) => {

	vm.$u.auth = {
		login() {
			return new Promise((resolve, reject) => {
				uni.login({
					provider: 'weixin',
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				});
			});
		},
		checkSession() {
			return new Promise((resolve, reject) => {
				uni.checkSession({
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				});
			});
		},
		//即将过期，4.13之后只能获取到匿名公开信息 和 加密敏感信息
		getUserInfo() {
			return new Promise((resolve, reject) => {
				uni.getUserInfo({
					provider: 'weixin',
					lang: 'zh_CN',
					// withCredentials: true,
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				})
			});
		},
		//代替getUserInfo 但每次都要授权  妥善处理登录态
		getUserProfile(){
			return new Promise((resolve,reject)=>{
				uni.getUserProfile({
					desc:'获取您的微信公开信息',
					provider:'weixin',
					// withCredentials:true,
					lang:'zh_CN',
					success(res){
						resolve(res)
					},
					fail(err){
						console.log('拒绝获取信息！')
						reject(err)
					}
					
				})
			})
		},
		
		getProvider() {
			return new Promise((resolve, reject) => {
				uni.getProvider({
					service: 'oauth',
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				})
			});
		},
		getSetting(scope) {
			return new Promise((resolve, reject) => {
				uni.getSetting({
					success(res) {
						resolve(res.authSetting[`scope.${scope}`])
					},
					fail(err) {
						reject(err)
					}
				})
			});
		},
		openSetting(scope) {
			return new Promise((resolve, reject) => {
				uni.openSetting({
					success(res) {
						resolve(res.authSetting[`scope.${scope}`])
					},
					fail(err) {
						reject(err)
					}
				})
			})
		},
		authorize(scope) {
			return new Promise((resolve, reject) => {
				uni.authorize({
					scope: `scope.${scope}`,
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				})
			});
		}
	};
}

export default {
	install
}
