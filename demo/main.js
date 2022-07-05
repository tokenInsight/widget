import { createApp } from 'vue';
import router from './routes/router';
import './assets/TokenInsightWidget.umd';
import './assets/style.css';
import App from './App.vue';

const app = createApp(App);

app.use(router).mount('#app');
