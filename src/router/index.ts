import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import MemberDetailView from '@/views/MemberDetailView.vue'
import type IBreadcrumb from '@/types/IBreadcrumb'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: [
          {
            name: 'Home',
            routeName: 'home',
          },
        ] as IBreadcrumb[],
      },
    },
    {
      path: '/member/:id',
      name: 'memberDetail',
      component: MemberDetailView,
      meta: {
        breadcrumb: [
          {
            name: 'Home',
            routeName: 'home',
          },
          {
            name: 'Detalhes',
            routeName: 'memberDetail',
          },
        ] as IBreadcrumb[],
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
