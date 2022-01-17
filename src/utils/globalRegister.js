import Vue from 'vue'

// 注册全局组件
register(require.context('@/components', true, /.vue/))

/**
 * 注册对应包下所有组件
 * @param {*} path 包路径
 */
function register(context) {
  // console.dir(context)
  // console.log(context.keys())
  context.keys().forEach((cnt) => {
    const component = context(cnt) // context => require.context
    let ctrl = component.default || component
    let a = ctrl.name
    let b = ctrl
    // 注册组件
    Vue.component(a, b)
  })
}
