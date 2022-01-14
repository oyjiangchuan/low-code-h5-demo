const adminConfig = {
  outputDir: 'dist/admin',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}

const h5Config = {
  outputDir: 'dist/h5',
  pages: {
    h5: {
      entry: 'h5/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'h5']
    }
  }
}

module.exports = process.env.TYPE == 'admin' ? adminConfig : h5Config
