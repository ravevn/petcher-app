import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Registration from "@/pages/Registration.vue";
import RegistrationStep2 from "@/pages/RegistrationStep2.vue";
import RegistrationStep3 from "@/pages/RegistrationStep3.vue";
import RegistrationStep4 from "@/pages/RegistrationStep4.vue";
import Login from "@/pages/Login.vue";
import Profile from "@/pages/Profile.vue"
import About from '@/pages/AboutUs.vue'; 
import ProjectList from "@/pages/ProjectList.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',   // Путь для страницы "О нас"
    name: 'AboutUs',
    component: About,  // Компонент, который будет отображаться по этому пути
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/registration2",
    name: "RegistrationStep2",
    component: RegistrationStep2,
  },
  {
    path: "/registration3",
    name: "RegistrationStep3",
    component: RegistrationStep3,
  },
  {
    path: "/registration4",
    name: "RegistrationStep4",
    component: RegistrationStep4,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/projectlist",
    name: "ProjectList",
    component: ProjectList,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
