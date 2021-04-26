const { name } = require('./package');
const MicroAppConfig = require("../common/config/micro-app-config");

module.exports = {
    devServer: {
        port: MicroAppConfig.systemApp.port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: `${MicroAppConfig.systemApp.name}`,
            // 把微应用打包成 umd 库格式
            libraryTarget: 'umd',
            // 按需加载相关
            jsonpFunction: `webpackJsonp_${MicroAppConfig.systemApp.name}`,
        }
    }
}
