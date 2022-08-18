import { createApp } from 'vue';
import router from './routes/router';
import './assets/css/common.css';
import TokenInsightWidget from '../src/index';
import './assets/style.css';
import App from './App.vue';
import Colors from './pages/Colors.vue';
import 'highlight.js/styles/github.css';

window.TokenInsightWidget = TokenInsightWidget;

const app = createApp(App);

app.component('Colors', Colors);

app.use(router).mount('#app');
