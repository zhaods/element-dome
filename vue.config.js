module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        port: 8080,
        host: 'localhost',//127.0.0.1
        https: false,
        open: true,
        proxy: { //配置跨域
            '/api': {
              target: 'http://10.226.64.71:18050/', //填写请求的目标地址
              changOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': '' //请求的时候使用这个api就可以
              }
            }
        }
    }
}