import { createApp } from "vue";
import Button from "./src/index.vue";

const InitButton = (el: string) => {
    const app=createApp(Button,{
        text:"我是一个测试"
    });
    app.mount(el)
};

export default InitButton;
