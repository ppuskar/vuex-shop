import Gallery from '../components/gallery-view.vue'


import { createWebHistory, createRouter } from "vue-router";



const routes = [
    {
      path: "/gallery-view",
      name: "gallery-view",
      component: Gallery,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

