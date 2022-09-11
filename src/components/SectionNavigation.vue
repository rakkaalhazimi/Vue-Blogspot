<template>
  <nav class="sticky-top">
    <h1 id="nav-logo">ALHAZIMI</h1>
    <ul id="nav-link-container" class="link-list">

      <!-- Navbar close button -->
      <li class="link-item">
        <button class="close-btn" @click="hideNavbar">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>

      <!-- Navbar links -->
      <li class="link-list">
        <div class="link-item">
          <router-link to="/" class="nav-link small-text text-dark">Home</router-link>
        </div>
        <div class="link-item">
          <router-link to="/about" class="nav-link small-text text-dark">About</router-link>
        </div>
        <div class="link-item">
          <router-link to="/projects" class="nav-link small-text text-dark">Projects</router-link>
        </div>
      </li>
      
      <!-- Navbar login button -->
      <li id="nav-login" class="link-item" v-if="!isLogin">
        <button @click="showAdminLogin" class="nav-link small-text text-dark">Login</button>
      </li>
      <li id="nav-logout" class="link-item" v-if="isLogin">
        <button @click="userLogout" class="nav-link small-text text-dark">Logout</button>
      </li>

    </ul>

    <!-- Navbar menu bar -->
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

#nav-link-container {
  width: 100%;
}

#nav-login,
#nav-logout {
  margin-left: auto;
}

.nav-link:hover {
  color: var(--accent);
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
