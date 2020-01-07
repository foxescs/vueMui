<!--
 * @Author: your name
 * @Date: 2020-01-07 11:18:40
 * @LastEditTime : 2020-01-07 17:51:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\components\news\newsList.vue
 -->
<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in listInfo' :key='item.pic_s444'>
					<router-link :to="'/home/newsList/'+item.content[0].song_id">
						<img class="mui-media-object mui-pull-left" :src='item.content[0].pic_small'>
						<div class="mui-media-body">
							<h1>{{item.content[0].title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{'20191201' | dataFormate}}</span>
                                <span>点击次数：{{item.count}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
				

			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            listInfo:[]
        }
    },
    created(){
        this.getListInfo()
    },
    methods:{
        getListInfo(){
            this.$http.get('https://api.apiopen.top/musicRankings').then(e=>{
                if(e.body.code=200){
                    this.listInfo=e.body.result;
                }else{
                    console.log('loading err...')
                }
            })
        }
    }
} 

</script>

<style lang="scss">
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
                
            }
            .mui-ellipsis{
                display: flex;
                justify-content: space-between;
                color:blue;
                font-size:12px;
            }
        }
    }
</style>