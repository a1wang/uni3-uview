<script>
	import { guardRoute } from "@/router/routerGuard.js"
	import { getCurrentInstance } from 'vue'

	export default {
		onLaunch: function() {
			uni.addInterceptor("navigateTo",{
				invoke(args) {
				    console.log("navigateTo",args);
				},
				complete(args) {
				    guardRoute(args.url)
				},
			})
			uni.addInterceptor("reLaunch",{
				invoke(args) {
				    console.log("reLaunch",args);
				},
				complete(args) {
				    guardRoute(args.url)
				},
			})
			uni.addInterceptor("redirectTo",{
				invoke(args) {
				    console.log("redirectTo",args);
				
				},
				// complete(args) {
				//     guardRoute(args.url)
				// },
			})
			uni.addInterceptor("switchTab",{  // 小程序 tabBar 之间的相互切换，不能生效（小程序主页切换底层不是用的switchTab，需要单独在页面中的onSHow配置）
				invoke(args) {
				    console.log("switchTab",args.url);
				
				},
				complete(args) {
				    guardRoute(args.url)
				},
			})
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
	@import "@/uni_modules/uview-plus/index.scss";
	/*每个页面公共css */
</style>
