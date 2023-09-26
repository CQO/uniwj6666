<script>
	import pageAnimation from './components/page-animation-pro'
	export default {
		mixins: [pageAnimation],
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/deep/ .u-status-bar {
		background: #000 !important;
	}
	@import "@/GAL/css/gal.css";
	::v-deep .u-navbar__content__title {
		font-weight: 600;
		letter-spacing: 2px;
		font-size: 18px !important;
	}

	::v-deep .u-navbar__content__left .u-icon--right .u-icon__icon {
		font-weight: 600 !important;
	}

	::v-deep .u-navbar__content__right .u-icon--right .u-icon__icon {
		font-size: 44rpx !important;
	}

	/*每个页面公共css */
	// @import '@/uni_modules/uni-scss/index.scss';
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	$u-primary: #2979ff;

	::v-deep .u-button--primary {
		background-color: $u-primary !important;
		border-color: $u-primary !important;
	}

    ::v-deep .uni-tabbar-border{
		display: none !important;
	}
	/* #ifndef APP-NVUE */

	// 设置整个项目的背景色
	page {
		background-color: #fff;
		color: #000;
	}

	/* #endif */
	image {
		display: block;
	}
	
	.u-navbar__content {
		background: #000 !important;
	}
	.u-navbar__content__title {
		color: #fff !important;
	}
	.uni-btn-icon {
		color: #fff !important;
	}
	.form, .box {
		background-color: #fff !important;
	}

	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28rpx;
		width: 100vw;
		color: #999;
	}

	.empty image {
		width: 300rpx;
		height: 300rpx;
	}

	.p10 {
		padding: 20rpx;
	}

	.pt10 {
		padding-top: 20rpx;
	}

	.pb10 {
		padding-bottom: 20rpx;
	}

	.mt5 {
		margin-top: 10rpx;
	}

	.mt10 {
		margin-top: 20rpx;
	}

	.mt20 {
		margin-top: 40rpx;
	}

	.mb10 {
		margin-bottom: 20rpx;
	}

	.mtb5 {
		margin: 10rpx 0;
	}

	.mtb10 {
		margin: 20rpx 0;
	}

	.mr10 {
		margin-right: 20rpx;
	}

	.mr20 {
		margin-right: 40rpx;
	}

	.ml10 {
		margin-left: 20rpx;
	}

	.ml15 {
		margin-left: 30rpx;
	}

	.mlr10 {
		margin-right: 20rpx;
		margin-left: 20rpx;
	}

	.mlr5 {
		margin-right: 10rpx;
		margin-left: 10rpx;
	}

	.f12 {
		font-size: 24rpx;
	}

	.f14 {
		font-size: 28rpx;
	}

	.f15 {
		font-size: 30rpx;
	}

	.f18 {
		font-size: 36rpx;
	}

	.f20 {
		font-size: 40rpx;
	}

	.red {
		color: #c41a1f;
	}

	.green {
		color: #E31F26
	}

	.gray {
		color: #999999;
	}

	.color6 {
		color: #666666;
	}

	.color3 {
		color: #333333;
	}

	.bold {
		font-weight: bold;
	}

	.radius10 {
		border-radius: 20rpx;
	}

	/*flex布局*/
	.flex {
		display: flex;
	}

	.flex1 {
		flex: 1;
	}

	.flex-column {
		flex-direction: column;
	}

	.justify-between {
		justify-content: space-between;
	}

	.justify-around {
		justify-content: space-around;
	}

	.justify-center {
		justify-content: center;
	}

	.align-center {
		align-items: center;
	}

	// .bg-white {
	// 	background-color: #fff;
	// }

	// .bg-green {
	// 	background-color: #E31F26;
	// }

	// .bg-red {
	// 	background-color: #c41a1f;
	// }

	// button[type=primary] {
	// 	background-color: #E31F26;
	// 	color: #000;
	// }

	// button[type=primary][plain] {
	// 	background-color: transparent;
	// 	border: 1px solid #E31F26;
	// 	color: #E31F26;
	// }

	/**
	     指定单个元素垂直水平居中
	 */
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/**
	    横向垂直靠左对齐
	 */
	.hleft {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	/**
	    横向垂直靠中对齐
	 */
	.hcenter {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	/**
	    横向垂直靠右对齐
	 */
	.hright {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	/**
	    横向指定多个元素的垂直水平居中
	 */
	.hcenter-vcenter {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	/**
	    横向垂直靠左对齐 —— 纵向水平靠上对齐
	 */
	.hleft-vtop {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
	}

	/**
	    横向垂直靠左对齐 —— 纵向水平靠中对齐
	 */
	.hleft-vcenter {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	/**
	    横向垂直靠左对齐 —— 纵向水平靠下对齐
	 */
	.hleft-vbottom {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
	}

	/**
	    横向垂直靠中对齐 —— 纵向水平靠上对齐
	 */
	.hcenter-vtop {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}

	/**
	     横向垂直靠中对齐 —— 纵向水平靠下对齐
	 */
	.hcenter-vbottom {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}

	/**
	    横向垂直靠右对齐 —— 纵向水平靠上对齐
	 */
	.hright-vtop {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-start;
	}

	/**
	    横向垂直靠右对齐 —— 纵向水平靠中对齐
	 */
	.hright-vcenter {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	/**
	    横向垂直靠右对齐 —— 纵向水平靠下对齐
	 */
	.hright-vbottom {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-end;
	}

	/**
	    横向垂直两端靠边对齐 —— 纵向水平居上对齐
	 */
	.hspace_between-vtop {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}

	/**
	    横向垂直两端靠边对齐 —— 纵向水平居中对齐
	 */
	.hspace_between-vcenter {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	/**
	    横向垂直两端靠边对齐 —— 纵向水平居下对齐
	 */
	.hspace_between-vbottom {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}

	/**
	    横向每个元素左右的间隔相等 —— 纵向水平居上对齐
	 */
	.hspace_around-vtop {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-around;
	}

	/**
	    横向每个元素左右的间隔相等 —— 纵向水平居中对齐
	 */
	.hspace_around-vcenter {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	/**
	    横向每个元素左右的间隔相等 —— 纵向水平居下对齐
	 */
	.hspace_around-vbottom {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-around;
	}

	/**
	    纵向指定多个元素的垂直水平居中
	 */
	.vcenter-hcenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/**
	    纵向水平居上对齐
	 */
	.vtop {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	/**
	    纵向水平居总对齐
	 */
	.vcenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/**
	    纵向水平居下对齐
	 */
	.vbottom {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	/**
	    纵向水平居上对齐 —— 横向垂直居左对齐
	 */
	.vtop-hleft {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	/**
	    纵向水平居上对齐 —— 横向垂直居中对齐
	 */
	.vtop-hcenter {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	/**
	    纵向水平居上对齐 —— 横向垂直居右对齐
	 */
	.vtop-hright {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
	}

	/**
	    纵向水平居中对齐 —— 横向垂直居左对齐
	 */

	.vcenter-hleft {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	/**
	    纵向水平居中对齐 —— 横向垂直居右对齐
	 */

	.vcenter-hright {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	/**
	    纵向水平居中对齐 —— 横向垂直居右对齐
	 */
	.vcenter-hbottom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	/**
	    纵向水平居下对齐 —— 横向垂直居左对齐
	 */
	.vbottom-hleft {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
	}

	/**
	    纵向水平居下对齐 —— 横向垂直居中对齐
	 */
	.vbottom-hcenter {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	/**
	    纵向水平居下对齐 —— 横向垂直居下对齐
	 */
	.vbottom-hright {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
	}

	/**
	    纵向两端对齐 —— 横向垂直居上对齐
	 */
	.vspace_between-hleft {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	/**
	    纵向两端对齐 —— 横向垂直居中对齐
	 */
	.vspace_between-hcenter {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	/**
	    纵向两端对齐 —— 横向垂直居下对齐
	 */
	.vspace_between-hright {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-between;
	}

	/**
	    纵向每个元素上下的间隔相等 —— 横向水平居上对齐
	 */
	.vspace_around-hleft {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}

	/**
	    纵向每个元素上下的间隔相等 —— 横向水平居中对齐
	 */
	.vspace_around-hcenter {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	/**
	    纵向每个元素上下的间隔相等 —— 横向水平居下对齐
	 */
	.vspace_around-hright {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-around;
	}
	
	/deep/ .uni-mask,   /deep/ .uni-actionsheet__mask {
		z-index: 99999 !important;
	}
	/deep/ .uni-actionsheet, /deep/ .uni-actionsheet_toggle {
		z-index: 100000 !important;
	}
</style>
