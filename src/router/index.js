import Vue from 'vue';
import VueRouter from 'vue-router';

import checkLogin from "./check-login";
import changeMenu from "./change-menu";

import Login from "@/pages/login";
import Error from "@/pages/error";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/home";
// 权限管理
const Authority = () => import(/* webpackChunkName: "author" */ "@/pages/author/authority");

Vue.use(VueRouter);

const routes = [
  // 登录页面
  {
    path: "/login",
    component: Login
  },
  // 首页
  {
    path: "/",
    component: Layout,
    children: [{
      path: "",
      component: Home
    }]
  },
  // 权限管理
  {
    path: "/author",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "authority"
      },
      {
        path: "authority",
        component: Authority
      }
    ]
  },
  // 404
  { path: '/*', component: Error }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 判断是否登录
  // if (!checkLogin(to)) {
  //   next("/login");
  //   return;
  // }
  // 修改菜单栏
  changeMenu(to);
  next();
})

export default router
