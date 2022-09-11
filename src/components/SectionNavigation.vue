<template>
  <nav class="sticky-top">
    <h1 id="nav-logo">ALHAZIMI</h1>
    <ul id="nav-link-container" class="link-list">
      <li class="link-item">
        <button class="close-btn" @click="hideNavbar">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
      <li class="link-item">
        <router-link to="/" class="small-text">Home</router-link>
      </li>
      <li class="link-item">
        <router-link to="/about" class="small-text">About</router-link>
      </li>
      <li class="link-item">
        <router-link to="/projects" class="small-text">Projects</router-link>
      </li>
      <li class="link-item" v-if="!isLogin">
        <button @click="showAdminLogin" class="small-text">Login</button>
      </li>
      <li class="link-item" v-if="isLogin">
        <button @click="userLogout" class="small-text">Logout</button>
      </li>
    </ul>
    <button id="nav-menu-btn" @click="showNavbar">
      <i class="fa-solid fa-bars"></i>
    </button>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user"


const { isLogin } = storeToRefs(useUserStore())
const { userLogout } = useUserStore()

let nav, admin, adminOverlay

onMounted(() => {
  nav = document.getElementById("nav-link-container")
  admin = document.getElementById("admin-form")
  adminOverlay = document.getElementById("admin-overlay")
})

function showNavbar() {
  nav.style.right = 0
}

function hideNavbar() {
  nav.style.right = "-90vw"
}

function showAdminLogin() {
  admin.style.display = "flex";
  adminOverlay.style.display = "block";
}
</script>

<style>
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: var(--medium-space);
  
  padding: var(--small-space) 5vw;
  width: 100%;
  background-color: var(--dominant-transparent);
  backdrop-filter: blur(3px);
}


@media (max-width: 600px) {
  nav {
    justify-content: space-between;
  }

  #nav-link-container {
    /* Display */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    /* Position */
    position: absolute;
    top: 0;
    right: -90vw;

    /* Sizing */
    /* horizontal padding is the same as nav */
    padding: var(--small-space) 0;
    width: 90vw;
    height: 100vh;

    /* Color */
    background-color: var(--dominant);
    transition: var(--default-transition);
  }

  .nav-link {
    width: 90vw;
  }

  .nav-link:hover {
    transition: var(--default-transition);
  }

  .nav-menu-bars,
  .nav-close-btn {
    display: block;
  }

  .nav-close-btn {
    margin-left: 90%;
  }
}
</style>
