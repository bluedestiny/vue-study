import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'

import step1 from './page/activePublic/step1.vue'
import step2 from './page/activePublic/step2.vue'
import step3 from './page/activePublic/step3.vue'
import step4 from './page/activePublic/step4.vue'

Vue.config.debug = true

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'
import activePublic from './page/activePublic/index.vue' 
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
       // 配置路由，当路径为'/activePublic',使用组件activePublic
        path:'/activePublic',
        component: activePublic,
        children:[
           // 路径为'/activePublic'，使用组件step1
          { path: ''      , component: step1  },
           // 路径为'/activePublic/step1'，使用组件step1
          { path: 'step1', component: step1  },
          // 路径为'/activePublic/step2'，使用组件step2
          { path: 'step2', component: step2  },
          { path: 'step3', component: step3  },
          { path: 'step4', component: step4  }
    ]

    }
  ],

})
 
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
