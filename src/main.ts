import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'vant/lib/index.css'
import './utils/rem.ts'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
