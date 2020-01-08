<!--
 * @Author: your name
 * @Date: 2020-01-07 16:39:17
 * @LastEditTime : 2020-01-08 16:04:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\components\news\newsDetail.vue
 -->
<template>
    <div>
        detail---{{this.$route.params}}
        <newsComment :id="this.id"></newsComment>
    </div>

</template>
<script>
import newsComment from './newsComment.vue'
export default {
    data(){
        return {
            id:this.$route.params
        }
    },
    methods:{

    },
    components:{
        newsComment:newsComment
    }

}
</script>
<style lang="scss">
    
</style>

