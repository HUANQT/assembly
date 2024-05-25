import inputText from "../views/inputText.vue";

import Error_404 from "../views/404.vue";

export default [
  // "/home/789"
  // 路由重定向
  { path: "/", redirect: "/inputText" },
  { path: "/inputText", component: inputText },
  // {path:'/fund_details',component:fund_details},
  { path: "*", component: Error_404 },
];
