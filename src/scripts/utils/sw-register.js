import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register()
    return
  }

  console.log('Browser tidak suport service worker!')
}

export default swRegister
