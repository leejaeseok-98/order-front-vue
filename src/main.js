// 중괄호가 쳐져있으면, 메서드를 import. 중괄호 없으면 해당파일자체를 import.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'

// 라우터 파일경로 지정정
const app =  createApp(App);


app.use(vuetify)
app.use(router)
app.mount('#app')
