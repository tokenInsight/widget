import { createApp } from 'vue';
import router from './routes/router';
import './assets/css/common.css';
import './assets/TokenInsightWidget.umd';
import './assets/style.css';
import App from './App.vue';
import 'highlight.js/styles/github.css';

const app = createApp(App);

app.use(router).mount('#app');
