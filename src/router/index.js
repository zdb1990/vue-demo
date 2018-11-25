import Vue from 'vue'
import Router from 'vue-router'
import Content from'@/components/Home/Content';
Vue.use(Router)
//引入组件
const Render=r=>require.ensure([],()=>r(require('./../components/vue-directive/Render/Render')),'render');
export default new Router({
  routes: [
    {
      path: '/',
      component: Content,
      children:[
        {path:'/render',component:Render},
        {path:'/',redirect: '/render'}
      ]
    },
  ]
})
