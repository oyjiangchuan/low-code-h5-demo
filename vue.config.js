const alias = require('./build/alias')
const baseConfig = require('./build/config')
const productionGzipExtensions = ['js', 'css']
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  ...baseConfig,
  publicPath: './',
  // resolve别名 externals gzip插件配置
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: alias
    }
    // CDN 加载依赖 webpack不打包
    config.externals = {
      'element-ui': 'ELEMENT',
      vue: 'Vue',
      vant: 'Vant',
      moment: 'moment'
    }
    // gzip 压缩
    if (process.env.GZIP == 'true') {
      console.log('执行GZIP')
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true //生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1
        })
      )
    }
  }
  // 链式配置loader
  // chainWebpack: config => {
  // }
}
