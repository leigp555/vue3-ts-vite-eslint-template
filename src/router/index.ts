import { createRouter, createWebHashHistory } from "vue-router";
import Hello from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/register.vue";

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/", component: Hello },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  ],
});

export default router;
