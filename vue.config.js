const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.BASS_URL,
  devServer: {
    // host: "0.0.0.0",
    // port: 8080,
    // open: true,
    proxy: {
      '/api': {
        target: `http://180.76.99.51:8040/`, //target: `http://172.30.30.191:6080/`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': "",
        },
      },
      '/contentapi': {
        target: `http://180.76.99.51:1880/`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': "",
        },
      },
    },
  },
})