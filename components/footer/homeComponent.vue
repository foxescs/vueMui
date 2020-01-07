<!--
 * @Author: your name
 * @Date: 2020-01-02 11:17:35
 * @LastEditTime : 2020-01-07 11:19:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\components\footer\homeComponent.vue
 -->
<template>
    <div class="appContainer">
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in dataList" :key="item.pic_s210" >
                <img :src="item.pic_s210" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 六宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9 grid-style">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img :src='menu1' alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img :src='menu2' alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src='menu3' alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src='menu4' alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img :src='menu5' alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src='menu6' alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		    </ul> 
    </div>
</template>

<script>
import menu1 from "../../src/images/menu1.png"
import menu2 from "../../src/images/menu2.png"
import menu3 from "../../src/images/menu3.png"
import menu4 from "../../src/images/menu4.png"
import menu5 from "../../src/images/menu5.png"
import menu6 from "../../src/images/menu6.png"

export default {
    data(){
        return {
            dataList:[],
            menu1:menu1,
            menu2:menu2,
            menu3:menu3,
            menu4:menu4,
            menu5:menu5,
            menu6:menu6
        }
    },
    created(){
        this.getLunboData()
    },
    methods:{
        getLunboData(){
            this.$http.get('https://api.apiopen.top/musicRankings').then(e=>{
                if(e.body.code==200){
                    this.dataList=e.body.result
                    console.log('数据加载成功')
                }else{
                    console.log('数据加载失败')
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .appContainer{
        .mint-swipe-items-wrap{
            height:200px;
            .mint-swipe-item{
                img{
                    width:100%;
                    height:100%;
                }

            }
            
        }
        .grid-style{
            li{
                a{
                    img{
                        width:60px;
                        height:60px;
                    }
                }
            }
        }

    }
</style>