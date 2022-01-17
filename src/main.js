import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Imgpond from 'imgpond'
// import Element from 'element-ui'
// import request from '@/utils/request' // request
// import draggable from 'vuedraggable' // 拖拽组件
// import getStyle from '@/utils/getStyle'
// import globalMethods from '@/utils/globalMethods' // 全局方法
// import '@/scss/index.scss' // 全局样式
// import 'element-ui/lib/theme-chalk/index.css'
// import '@/utils/adapter.js' // 适配文件,移动端(小于540px)才进行适配
import '@/utils/globalRegister.js' // 全局组件注册
// import _ from 'lodash' // lodash

// 注册所有物料，获取物料属性与物料初始值
// import registerSchema from '@/utils/registerSchema'

// Vue.prototype._ = _
// Vue.prototype.$getStyle = getStyle

// Vue.component('draggable', draggable)

// Vue.use(globalMethods)
//   .use(Element)
//   .use(Imgpond, {
//     request,
//     url: process.env.VUE_APP_UPLOAD_API + 'upload',
//     param: {
//       domainId: 3,
//       dir: 'img'
//     },
//     sizeExceededWarningHTML: '<a href="https://www.kdocs.cn/l/smLPgaIjt" target="_blank">点击查看压缩指南</a>',
//     poweredBy: 'element'
//   })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
