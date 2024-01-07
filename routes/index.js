import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SampleTwo from "@/views/SampleTwo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sample-two",
    name: "Sample Two",
    component: SampleTwo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;