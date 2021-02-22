/*
 * @Description: 
 * @Author: GangLin.Chen
 * @Date: 2021-02-22 13:22:29
 * @LastEditors: OBKoro1
 * @LastEditTime: 2021-02-22 13:27:02
 * @FilePath: /vite-vue/src/router/index.ts
 * @filePathColon: \\
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/Login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;