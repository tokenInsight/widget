import { createApp } from "vue";
import Price from "./src/index.vue";

const createPrice = (el: string) => {
    const app=createApp(Price,{
        text:"我是一个测试"
    });
    app.mount(el)
};

export default createPrice;
