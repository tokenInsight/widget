import { createApp } from 'vue';
import Watch from './src/index.vue';

type WatchType = {
  el: string;
  backgroundColor?: string;
};

const createWatch = (params: WatchType, request:any) => {
  const app = createApp(Watch, {
    request
  });
  app.mount(params.el);
};
export type { WatchType };

export default createWatch;