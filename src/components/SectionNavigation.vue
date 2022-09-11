<template>
  <nav class="sticky-top">
    <h1 id="nav-logo" class="text-dark">ALHAZIMI</h1>

    <!-- Navbar links -->
    <ul id="nav-link-container" class="link-list">

      <!-- Navbar page links -->
      <li class="link-item">
        <router-link to="/" class="nav-link small-text text-dark">Home</router-link>
      </li>
      <div class="link-item">
        <router-link to="/about" class="nav-link small-text text-dark">About</router-link>
      </div>
      <li class="link-item">
        <router-link to="/projects" class="nav-link small-text text-dark">Projects</router-link>
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
    <button id="nav-menu-btn" class="text-dark" @click="showHideNavbar">
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

function showHideNavbar() {
  nav.style.left = nav.style.left != "0px" ? "0px" : "-40vw"
}

function showAdminLogin() {
  admin.style.display = "flex";
  adminOverlay.style.display = "block";
}
</script>

<style>
nav {
  display: flex;
  column-gap: 5rem;
  padding: 1rem 5vw;
  width: 100%;
  background-color: var(--dominant-transparent);
  backdrop-filter: blur(3px);
}

#nav-link-container {
  width: 100%;
}

.nav-link:hover {
  color: var(--accent);
}

#nav-login,
#nav-logout {
  margin-left: auto;
}

#nav-menu-btn {
  display: none;
}


@media (max-width: 600px) {
  nav {
    justify-content: space-between;
  }

  #nav-link-container {
    /* Display */
    flex-direction: column;
    row-gap: 1rem;

    /* Position */
    position: absolute;
    top: 0;
    left: -40vw;

    /* Size */
    padding-top: 1rem;
    padding-left: 1rem;
    width: 40vw;
    height: 100vh;

    /* Color */
    background-color: var(--dominant-shade);
    transition: var(--default-transition);
  }

  #nav-link-list {
    flex-direction: column;
    width: 90vw;
  }

  #nav-login,
  #nav-logout {
    margin-left: 0;
  }

  #nav-menu-btn {
    display: block;
  }

}
</style>
