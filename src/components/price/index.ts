import { createApp } from 'vue';
import Price from './src/index.vue';

type priceParams = {
  el: string;
};

const createPrice = (params: priceParams) => {
  const app = createApp(Price, {
    text: '我是一个测试'
  });
  app.mount(params.el);
};
export type { priceParams };

export default createPrice;
