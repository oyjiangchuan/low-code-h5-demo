const path = require('path')

const resolve = (dir) => {
  return path.resolve(__dirname, '../', dir)
}

module.exports = {
  '@': resolve('src'),
  views: resolve('src/views'),
  components: resolve('src/components')
}
