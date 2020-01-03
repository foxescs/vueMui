<!--
 * @Author: your name
 * @Date: 2020-01-02 11:17:35
 * @LastEditTime : 2020-01-03 10:57:47
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
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src='../../src/images/menu1.png' alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../src/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../src/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../src/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../src/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../src/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		    </ul> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList:[]
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
                &:nth-child(1){
                background-color: red;
                }
                &:nth-child(2){
                    background-color: hotpink;
                }
                &:nth-child(3){
                    background-color: pink;
                }

                img{
                    width:100%;
                    height:100%;
                }
            }
            li{
                img{
                    width:60px;
                    height:60px;
                }
            }
        }


    }
</style>