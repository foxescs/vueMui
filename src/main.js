/*
 * @Author: your name
 * @Date: 2019-12-30 16:40:18
 * @LastEditTime : 2019-12-31 16:54:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\src\main.js
 */
import Vue from 'vue'
import app from './app.vue'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);

var vm=new Vue({
    el:'#app',
    data:{},
    render:c=>c(app)
})
