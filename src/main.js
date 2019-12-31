/*
 * @Author: your name
 * @Date: 2019-12-30 16:40:18
 * @LastEditTime : 2019-12-31 17:24:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\src\main.js
 */
import Vue from 'vue'
import app from './app.vue'
import router from './router.js'
import '../lib/mui/css/mui.min.css'
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);

var vm=new Vue({
    el:'#app',
    data:{},
    render:c=>c(app),
    router
})
