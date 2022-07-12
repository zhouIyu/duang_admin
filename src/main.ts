import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import 'normalize.css/normalize.css'
import { setupIcon } from './utils/icon'

function bootstrap () {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  setupIcon(app)

  app.mount('#app')
}

bootstrap()
