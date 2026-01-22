import Gallery from '../components/gallery-view.vue'
import Amm from '../components/amm.vue'
import ShoppingCart from '../components/shopping-cart.vue'
import AddItemCategory from '../components/add-item-category.vue'
import AddItem from '../components/add-item.vue'
import ImagesPage from '../components/images.vue'
import SignUp from '../components/sign-up.vue'
import LoginView from '../components/login-view.vue'

import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
      path: "/gallery-view",
      name: "gallery-view",
      component: Gallery,
    },
    {
      path: "/amm",
      name: "amm",
      component: Amm,
    },
    {
      path: "/shopping-cart",
      name: "shopping-cart",
      component: ShoppingCart,
    },
    {
      path: "/add-item-category",
      name: "add-item-category",
      component: AddItemCategory,
    },
    {
      path: "/add-item",
      name: "add-item",
      component: AddItem,
    },
    {
      path: "/images",
      name: "images",
      component: ImagesPage,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp,
    },
    {
      path: "/login-view",
      name: "login-view",
      component: LoginView,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

