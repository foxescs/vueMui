<!--
 * @Author: your name
 * @Date: 2019-12-30 16:42:10
 * @LastEditTime : 2020-01-06 17:45:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\src\app.vue
 -->
<template>
    <div class="app_container">
        <!-- 头部 -->
        <mt-header fixed title="fixed top"></mt-header>
        <!-- 中间 -->
            <transition>
				<router-view></router-view>
			</transition>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
	.v-enter{
		opacity: 0;
		transform:translateX(100%)
	}
	.v-leave-to{
		opacity: 0;
		transform:translateX(-100%)
	}
	.v-enter-active,v-leave-active{
		transition:all 0.5s ease;
	}
    .app_container{
		padding-top:40px;
		padding-bottom:50px;
		overflow-x: hidden;
	}
</style>