import Vue from 'vue'
import Router from 'vue-router'
import AllList from '@/components/AllList/AllList'  //@是一个变量，表示src目录
import Farming from '@/components/Farming/Farming'
import Others from '@/components/Others/Others'
import User from '@/components/UserCenter/User'



Vue.use(Router)

export default new Router({
mode:"history", //去掉哈希 #
  routes: [

    {
      path: '/',
      name: 'AllList',
      component: AllList
  },
  {
    path: '/farming',
    name: 'Farming',
    component: Farming
},
{
  path: '/others',
  name: 'Others',
  component: Others
},
{
  path: '/user',
  name: 'User',
  component: User
},
// {
//   path: '/home',
//   redirect :'/',
//   name: '',
//   component:
// }

  ]
})
