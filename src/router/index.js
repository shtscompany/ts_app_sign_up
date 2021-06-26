import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "pageSwitching",
    component: () =>
      import("../components/menuBar/Application/pageSwitching.vue")
  },
  {
    path: "/OurProjects",
    name: "OurProjects",
    component: () => import("../components/menuBar/OurProjects.vue")
  },
  {
    path: "/organization",
    name: "organization",
    component: () => import("../components/menuBar/organization.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/menuBar/about.vue")
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("../components/menuBar/activity.vue")
  },
  {
    path: "/Application",
    name: "pageSwitching",
    component: () =>
      import("../components/menuBar/Application/pageSwitching.vue")
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../components/menuBar/contacts.vue")
  },
  {
    path: "/donation",
    name: "donation",
    component: () => import("../components/menuBar/donation.vue")
  },
  {
    path: "/fotoGalery",
    name: "fotoGalery",
    component: () => import("../components/menuBar/fotoGalery.vue")
  },
  {
    path: "/links",
    name: "links",
    component: () => import("../components/menuBar/links.vue")
  },
  {
    path: "/ourTeam",
    name: "ourTeam",
    component: () => import("../components/menuBar/ourTeam.vue")
  },
  {
    path: "/prayPlaces",
    name: "prayPlaces",
    component: () => import("../components/menuBar/prayPlaces.vue")
  },
  {
    path: "/tsHistory",
    name: "tsHistory",
    component: () => import("../components/menuBar/tsHistory.vue")
  },
  {
    path: "/tsStore",
    name: "tsStore",
    component: () => import("../components/menuBar/tsStore.vue")
  },
  {
    path: "/videoGalery",
    name: "videoGalery",
    component: () => import("../components/menuBar/videoGalery.vue")
  },
  {
    path: "/sentSuccess",
    name: "sentSuccess",
    component: () => import("../components/menuBar/Application/sentSuccess.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
