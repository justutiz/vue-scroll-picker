const hotReloadAPIPath = require.resolve('vue-hot-reload-api')

exports.genHotReloadCode = (id, functional) => {
  // TODO handle CSSModules and style injection disposal
  return wrap(`
    if (!module.hot.data) {
      api.createRecord('${id}', component.options)
    } else {
      api.${functional ? `rerender` : `reload`}('${id}', component.options)
    }
  `)
}

exports.genTemplateHotReloadCode = id => {
  return wrap(`
    if (module.hot.data) {
      require('${hotReloadAPIPath}').rerender('${id}', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    }
  `)
}

function wrap (inner) {
  return `
/* hot reload */
if (module.hot) {
  var api = require('${hotReloadAPIPath}')
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    ${inner.trim()}
  }
}
  `.trim()
}