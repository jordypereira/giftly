import Vue from 'vue';
import Router from 'vue-router';
import store from "./store";
import Home from './views/Home.vue';
import Categories from './views/Categories.vue';
import Checkout from './views/Checkout.vue';
import FAQ from './views/FAQ.vue';
import Login from './views/Login.vue';
import ShoppingCart from './views/ShoppingCart.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
  ],
});

router.afterEach(() => {
  store.commit('hideAlert');
})

export default router;
