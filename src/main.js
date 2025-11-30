
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

createApp(App).mount('#app')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => console.log('Service Worker registered', reg))
      .catch((err) => console.log('Service Worker registration failed', err));
  });
}
