import Vue from 'vue';
import Router from 'vue-router';
import TimeCard from '@/components/TimeCard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimeCard',
      component: TimeCard,
    },
  ],
});
