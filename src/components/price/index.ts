import { createApp } from 'vue';
import Price from './src/index.vue';

type PriceType = {
  el: string;
  tid: string;
  backgroundColor?: string;
};

const createPrice = (params: PriceType, request:any) => {
  const app = createApp(Price, {
    tid: params.tid,
    request
  });
  app.mount(params.el);
};
export type { PriceType };

export default createPrice;
