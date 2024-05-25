import Vue from "vue";
import App from "./App.vue";
import  "./style.css";
// import inputText from "./views/inputText.vue";
import { Icon } from '@iconify/vue2';
import router from "./router/index";
Vue.use(router);
//
import BetterScroll from "./components/BetterScroll.vue";
Vue.component('BetterScroll',BetterScroll)
// 按钮组件
import Button from "./components/button.vue";
Vue.component('Button',Button)
// 输入框组件
import Input from "./components/Input.vue";
Vue.component('Input',Input)
import MyRadio from "./components/MyRadio.vue";
Vue.component('MyRadio',MyRadio)
import MySwitch from "./components/MySwitch.vue";
Vue.component('MySwitch',MySwitch)

import checkbox from "./components/checkbox";
Vue.use(checkbox)
import drawer from "./components/drawer";
Vue.use(drawer)
import tabs from "./components/tabs";
Vue.use(tabs)

import message from "./components/message";
Vue.use(message)
import messageBox from "./components/messageBox";
Vue.use(messageBox)

import notification from "./components/notification";
Vue.use(notification)




// Vue.observable 可以让普通对象具备响应式！
// Vue.prototype.$a = 123;
// Vue.prototype.myRoute = router.currentRoute;
Vue.component("Icon", Icon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
