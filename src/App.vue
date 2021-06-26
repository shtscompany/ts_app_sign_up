<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a
        class="navbar-brand float-left"
        href="http://tsiklauri.ge"
        target="_blank"
      >
        წიკლაურები
      </a>
      <form class="form-inline">
        <router-link class="nav-link pr-3" to="/application"
          >აპლიკაცია</router-link
        >
        <div class="btn-group dropleft">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            მენიუ
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <div v-for="(menu, index) in menuBar">
              <router-link class="dropdown-item pr-3" :to="menu.menuLink">{{
                menu.menuName
              }}</router-link>
            </div>
          </div>
        </div>
      </form>
    </nav>

    <div class="container">
      <router-view />

      <!-- <pageSwitching /> -->
    </div>
  </div>
</template>

<script>
// import pageSwitching from "./components/pageSwitching";

export default {
  name: "App",
  // comments: {
  //   pageSwitching,
  // },
  // components: {
  //   pageSwitching,
  // },
  data: function () {
    return {
      menuBar: [
        { menuName: "ჩვენს შესახებ", menuLink: "/about" },
        { menuName: "აქტივობები", menuLink: "/activity" },
        { menuName: "ჩვენი გუნდი", menuLink: "/ourTeam" },
        { menuName: "ფოტო გალერეა", menuLink: "/fotoGalery" },
        { menuName: "ვიდეო გალერა", menuLink: "/videoGalery" },
        { menuName: "თანხის გადარიცხვა", menuLink: "/donation" },
        { menuName: "ბმულები", menuLink: "/links" },
        { menuName: "მაღაზია", menuLink: "/tsStore" },
        { menuName: "კონტაქტი", menuLink: "/contacts" },
      ],
    };
  },
};
</script>

<style lang="css">
</style>


