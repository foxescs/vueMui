<!--
 * @Author: your name
 * @Date: 2019-12-31 16:19:19
 * @LastEditTime : 2020-01-02 11:32:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myprojects\README.md
 -->
##8.x babel相关安装 ##https://www.cnblogs.com/ldq678/p/10448374.html
babel主要解决js高级语法转义，不然会报错，现在安装不了7.x的版本了
目前安装步骤是：必须安装的插件有
cnpm i @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/runtime babel-loader -D
.babelrc中必须配置
 {  "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
}
在webpack.config.js中配置
module:{
    rules:[
        {test: /\.js$/,use: 'babel-loader',exclude: /node_modules/}
    ]
}
##mint-ui 按需导入需要安装插件npm install babel-plugin-component -D
.babelrc中配置
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
##现在vue插件的安装 必须要cnpm i vue-loader vue-template-compiler -D
这样安装的vue node_modules中用的是runtime-only的vue.js,所以要在webpack.config.js中配置
module:{
    rules:[{test:/\.vue$/,use:'vue-loader'},],
    resolve:{
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}
const VueLoaderPlugin=require('vue-loader/lib/plugin')
plugins:[new VueLoaderPlugin()]
##其他的匹配规则需要下载的插件
 css   cnpm i style-loader css-loader -D
less	cnpm i less-loader less -D
scss	cnpm i sass-loader node-sass -D
处理图片和字体文件   cnpm i url-loader file-loader -D
module:{
    rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.scss$/,use: ['style-loader', 'css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eof|svg|woff|woff2)$/,use:'url-loader'}
    ]
}
##webpack配置，需要安装插件cnpm i webpack webpack-cli webpack-dev-server -D
webpack可以全局安装，webpack的功能就是自动打包，不用手动在index.js中自动引入main.js
相关配置在webpack.config.js中
const path=require('path')
const webpack=require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
    ],
}

##项目布局结构
1.header 部分用的是mint-ui
2.footer 部分用的是mui
3.中间部分用的是路由
footer路由链接改造和路由高亮显示用到知识点vue-router vue.use(VueRouter) router-link to linkActiveClass
路由组件的切换涉及的知识点 component.vue {path:'',componnet:''} <router-view></router-view>