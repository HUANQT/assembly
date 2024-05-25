import Vue from "vue";
import _notification from "./notification.vue";

const Notification = Vue.extend(_notification);

const defaultOption = {
  message: "代码是写给人看的，顺便给机器运行的！",
  title: "标题名称",
  type: "primary",
};

function $notify(option = {}) {
  if (typeof option === "string") option = { message: option };

  const notification = new Notification({
    propsData: Object.assign({}, defaultOption, option),
  });

  notification.$mount();
  document.body.appendChild(notification.$el);
}

export default (Vue) => {
  Vue.prototype.$notify = $notify;
};
