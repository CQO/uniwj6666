import Vue from 'vue'
import zhcn from './zh-cn.js'
import enus from './en-us.js'
import ryrb from './ry-rb.js'
import zhtw from './zh-tw.js'
import VueI18n from 'vue-i18n' 
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: uni.getStorageSync('lang') || 'zh-cn',
	messages: {
		'zh-cn': zhcn, // 这里为上面通过import引入的语言包
		'en-us': enus,
		'ry-rb': ryrb,
		'zh-tw': zhtw
	}
})

export default i18n