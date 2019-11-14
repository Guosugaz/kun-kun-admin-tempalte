const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development';
// api的前缀地址
const proxyUrl = "http://192.168.0.103:8080";
// 打包的静态资源路径
const publicPath = isDev ? '/' : "/";

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath,
  productionSourceMap: isDev,
  configureWebpack: config => {
    // 自定义路径
    // config.resolve = {
    //   extensions: ['.js', '.vue', '.ts'],
    //   alias: {
    //     '@': resolve('src'),
    //     'assets': resolve('src/assets')
    //   }
    // };
    // 在生产环境配置webpack.config配置
    if (!isDev) {
      // 去除console
      config.optimization
        .minimizer[0]
        .options.terserOptions
        .compress.drop_console = true;
      return {
        plugins: [
          // 压缩js,.html,.css文件
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            deleteOriginalAssets: false
          }),
          // new BundleAnalyzerPlugin() // 打包分析
        ]
      }
    }
  },
  devServer: {
    contentBase: "./dist",
    proxy: {
      '/api': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false
      }
    },
    overlay: {
      warning: false
    }
  }
};