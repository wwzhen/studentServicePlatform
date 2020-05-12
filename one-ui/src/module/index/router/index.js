import VueRouter from 'vue-router'
import home from './home'

const router = {
  routes: [
    home
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
}

// 构建VueRouter对象
let vueRouter = new VueRouter(router)

// 拦截路由，进行授权判断
vueRouter.beforeEach((to, from, next) => {
  // TODO 验证用户是否登录，以及用户是否有访问该路由的权限
  // TODO 如果没有登录，则跳转到登录界面
  console.log(to)
  console.log(from)
  document.body.scrollTop = 0
  next()
})

export default vueRouter
