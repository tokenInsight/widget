import { createApp } from 'vue';
import router from './routes/router';
import './assets/css/common.css';
import TokenInsightWidget from '../src/index';
import App from './App.vue';
import SelectCoin from './pages/SelectCoin.vue';
import PreCode from './pages/PreCode.vue';
import 'highlight.js/styles/github.css';
import '../src/components/theme/index.less';

window.TokenInsightWidget = TokenInsightWidget;

const app = createApp(App);

app.component('SelectCoin', SelectCoin);
app.component('PreCode', PreCode);

app.use(router).mount('#app');
