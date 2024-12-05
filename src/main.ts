import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import ElementPlus from "element-plus";
import { ElCalendar } from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import V3waterfall from 'v3-waterfall'
import 'v3-waterfall/dist/style.css'
createApp(App).use(router).use(ElCalendar).use(V3waterfall).mount("#app");

