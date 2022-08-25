import { createApp } from 'vue';
import router from './routes/router';
import './assets/css/common.css';
import './assets/TokenInsightWidget.umd';
import './assets/index.css';
import App from './App.vue';
import 'highlight.js/styles/github.css';
import SelectCoin from './pages/SelectCoin.vue';

const app = createApp(App);

app.component('SelectCoin', SelectCoin);

app.use(router).mount('#app');
