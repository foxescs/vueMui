/*
 * @Author: your name
 * @Date: 2019-12-30 16:40:18
 * @LastEditTime : 2020-01-07 16:26:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\src\main.js
 */
import Vue from 'vue'
import app from './app.vue'

import moment from 'moment'
Vue.filter('dataFormate', function (str, parttern = 'YYYY-MM-DD') {
    return moment(str).format(parttern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import {Header} from 'mint-ui'
import {Swipe,SwipeItem} from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);

var vm=new Vue({
    el:'#app',
    data:{},
    render:c=>c(app),
    router
})
