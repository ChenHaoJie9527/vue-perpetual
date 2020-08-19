module.exports = {
    devServer: {
        //当出现错误的时候，会在页面上出现一层蒙层，并且打印错误，所以需要将其取消
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            "/api": {
                target: "http://v.juhe.cn/",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },

}