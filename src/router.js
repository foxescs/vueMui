/*
 * @Author: your name
 * @Date: 2019-12-31 17:23:57
 * @LastEditTime : 2020-01-07 11:40:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\src\router.js
 */
import VueRouter from 'vue-router'

import homeComponent from '../components/footer/homeComponent.vue'
import memberComponent from '../components/footer/memberComponent.vue'
import shopComponent from '../components/footer/shopComponent.vue'
import searchComponent from '../components/footer/searchComponent.vue'
import newsList from '../components/news/newsList.vue'
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeComponent},
        {path: '/member', component: memberComponent},
        {path: '/shop', component: shopComponent},
        {path: '/search',component: searchComponent},
        {path:'/home/newsList',component:newsList}
    ],
    linkExactActiveClass: 'mui-active'
})

export default router

