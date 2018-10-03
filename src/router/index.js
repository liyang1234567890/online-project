import Vue from 'vue'
import Router from 'vue-router'
import online from '@/components/online.vue'
import record from '@/components/record.vue'

Vue.use(Router)

const routes = [
      {path: '/',component:online},
      {path: '/record',component:record}
]


//创建router实例 然后传routes 配置
const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')