import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/404";
import Account from "../views/Account.vue";
import Dashboard from "../views/Dashboard.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/campaigns",
    name: "campaign",
    component: Form
  },

  {
    path: "/account",
    name: "account",
    component: Account
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
