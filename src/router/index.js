import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Intro from "@/views/Intro.vue";
import Experience from "@/views/Experience.vue";
import Projects from "@/views/Projects.vue";
import Blogs from "@/views/Blogs.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/intro", component: Intro },
  { path: "/experience", component: Experience },
  { path: "/projects", component: Projects },
  { path: "/blogs", component: Blogs },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
