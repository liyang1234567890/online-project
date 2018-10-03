// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入安装vue-router插件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入online.vue  record.vue插件
import App from './App.vue';
import online from './components/online.vue';
import record from './components/record.vue';

Vue.config.productionTip = false
Vue.use(ElementUI)

//定义路由
const routes = [
  {path: '/',component:online},
  {path: '/record',component:record}
]

const router = new VueRouter({
  routes
})

//创建和挂载根实例 通过router配置参数注入路由，从而让整个应用有路由功能
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
});
