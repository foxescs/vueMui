/*
 * @Author: your name
 * @Date: 2019-12-30 10:22:50
 * @LastEditTime : 2020-01-03 18:23:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \20191230\webpack.config.js
 */
const path=require('path')
const webpack=require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')

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
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.scss$/,use: ['style-loader', 'css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eof|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'},
            {test: /\.js$/,use: 'babel-loader',exclude: /node_modules/}
        ]
    },
    resolve:{
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}