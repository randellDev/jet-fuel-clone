import { createRouter, createWebHistory } from 'vue-router';
import JetFuelSafety from '@/components/sections/JetFuelSafety.vue';
import Indoor from '../components/sections/Indoor.vue';
import PageHome from '../components/pages/PageHome.vue';
import RequestDemo from '../components/modal/RequestDemo.vue';
import Header from '../components/layout/Header.vue';
import CoreCapabilites from '../components/sections/CoreCapabilites.vue';
import SaasBuilt from '../components/sections/SaasBuilt.vue';
import JetfuelContact from '../components/sections/JetfuelContact.vue';
import SaasCooling from '../components/sections/SaasCooling.vue';

const routes = [
  {
    path: '/',
    redirect: '/pagehome',
  },
  {
    path: '/pagehome',
    name: 'PageHome',
    component: PageHome,
  },
  {
    path: '/jetfuelsafety',
    name: 'JetFuelSafety',
    component: JetFuelSafety,
  },
  {
    path: '/indoor',
    name: 'Indoor',
    component: Indoor,
  },

  {
    path: '/requestdemo',
    name: 'RequestDemo',
    component: RequestDemo,
  },

  {
    path: '/header',
    name: 'Header',
    component: Header,
  },
  {
    path: '/corecapabilites',
    name: 'CoreCapabilites',
    component: CoreCapabilites,
  },

  {
    path: '/builtfor',
    name: 'SaasBuilt',
    component: SaasBuilt,
  },

  {
    path: '/contact',
    name: 'JetFuelContact',
    component: JetfuelContact,
  },

  {
    path: '/cooling',
    name: 'SaasCooling',
    component: SaasCooling,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
