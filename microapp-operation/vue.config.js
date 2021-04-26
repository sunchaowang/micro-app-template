const { name } = require('./package');
const MicroAppConfig = require("../common/config/micro-app-config");

module.exports = {
    devServer: {
        port: MicroAppConfig.operationApp.port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        }
    }
}
