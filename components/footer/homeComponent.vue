<!--
 * @Author: your name
 * @Date: 2020-01-02 11:17:35
 * @LastEditTime : 2020-01-02 11:48:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\components\footer\homeComponent.vue
 -->
<template>
    <div class="appContainer">
        <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .appContainer{
        .mint-swipe-items-wrap{
            height:400px;
        }
    }
</style>