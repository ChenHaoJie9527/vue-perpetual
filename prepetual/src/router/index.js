import {
  createRouter,
  createWebHistory
} from 'vue-router';
import DayPage from "@/views/Day";
const routes = [{
    path: "/",
    name: "DayPage",
    component: DayPage
  },
  {
    path: "/month",
    name: "MothPage",
    component: () => import("../views/Month.vue")
  },
  {
    path: "/Year",
    name: "YearPage",
    component: () => import("../views/Year.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router