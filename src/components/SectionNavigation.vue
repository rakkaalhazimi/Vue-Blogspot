<template>
  <nav class="sticky-top">
    <h1 id="nav-logo" class="text-dark">recognize.</h1>

    <!-- Navbar links -->
    <ul id="nav-link-container" class="link-list">

      <!-- Navbar page links -->
      <li>
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <div>
        <router-link to="/about" class="nav-link">About</router-link>
      </div>
      <li>
        <router-link to="/projects" class="nav-link">Projects</router-link>
      </li>

      <!-- Repo icon -->
      <li id="repo-icon">
        <a href="https://github.com/rakkaalhazimi/Vue-Blogspot" class="icon-btn" target="blank"><i class="fa-brands fa-github"></i></a>
      </li>

    </ul>

    <!-- Navbar menu bar -->
    <button id="nav-menu-btn" class="icon-btn" @click="showHidesNavbar.show">
      <i class="fa-solid fa-bars"></i>
    </button>

  </nav>
</template>

<script setup>
import { onMounted } from 'vue';


let nav

onMounted(() => {
  nav = document.getElementById("nav-link-container")
})

const showHidesNavbar = {
  init: undefined,
  show: function () {
    if (nav.style.left != "0px") {
      this.init = nav.style.left
      nav.style.left = "0px"

    } else {
      nav.style.left = this.init
    }
  }
}
</script>

<style lang="scss">
nav {
  @include flex-row($gap: 5rem);

  padding: $navbar-pad;
  width: 100%;
  color: $text-dark;
  backdrop-filter: blur(3px);

  @media (max-width: 600px) {
    justify-content: space-between;
  }
}

#nav-link-container {
  @include flex-row($gap: 3rem);
  width: 100%;

  @media (max-width: 600px) {
    $width: 50vw;

    /* Display */
    flex-direction: column;
    row-gap: 1rem;

    /* Position */
    position: absolute;
    top: 0;
    left: -$width;

    /* Size */
    padding-top: 1rem;
    width: $width;
    height: 100vh;

    /* Color */
    background-color: $dominant;
    transition: $default-transition;
  }
}

.nav-link {
  color: $text-dark;
  font-size: .9rem;
  transition: $default-transition;

  &:hover {
    color: $accent;
  }
}

#repo-icon {
  margin-left: auto;

  @media (max-width: 600px) {
    margin-left: 0;
  }
}

#nav-menu-btn {
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
}
</style>
