import './assets/main.css' // učitavanje glavnog stila aplikacije
 // koji se primjenjuje nad cijelom aplikacijom
import { createApp } from 'vue' // učitavanje funkcije za kreiranje nove vue instance
import App from './App.vue' // učitavanje komponente App.vue
createApp(App).mount('#app')