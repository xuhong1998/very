import { createApp } from 'vue'
import element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from "./router";


const app = createApp(App)
app.use(element).use(router)
app.mount('#app')
