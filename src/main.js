import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import store from './store/index.ts'
import 'vant/lib/index.css'
import './utils/rem.ts'

createApp(App)
  .use(router)
  .use(store)
  // .use(vant)
  .mount('#app')
