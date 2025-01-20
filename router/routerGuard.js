import { useSystemStore } from '@/store/system';
const whiteList = ['/pages/login/login']; // 白名单路由

function isInWhiteList(path) {
  return whiteList.includes(path);
}
function checkAuth(path) {
  return useSystemStore().token
}

export function guardRoute(to) {
  if (!checkAuth() && !isInWhiteList(to)) {
    // 如果未认证且访问的路由不在白名单中，重定向到登录页面
    uni.redirectTo({
      url: '/pages/login/login'
    });
  }
}
