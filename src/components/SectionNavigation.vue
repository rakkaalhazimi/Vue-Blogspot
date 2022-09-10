<template>
  <nav>
    <h1 class="nav-logo">ALHAZIMI</h1>
    <ul id="nav-link-container">
      <li class="nav-link-item">
        <button class="nav-close-btn" @click="hideNavbar"><i class="fa-solid fa-xmark"></i></button>
      </li>
      <li class="nav-link-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/projects" class="nav-link">Projects</router-link>
      </li>
      <li class="nav-link-item"><button @click="showAdminLogin" class="nav-link login-btn">Login</button></li>
    </ul>
    <button class="nav-menu-bars" @click="showNavbar">
      <i class="fa-solid fa-bars"></i>
    </button>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue';

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
  position: sticky;
  top: 0;
  padding: var(--small-space) 5vw;
  width: 100%;
  background-color: var(--dominant-transparent);
  backdrop-filter: blur(3px);
}

#nav-link-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: var(--small-space);
  width: 100%;
}

.nav-link-item:last-child {
  margin-left: auto;
}

.nav-logo,
.nav-link,
.nav-menu-bars,
.nav-close-btn {
  height: var(--navbar-link-height);
  line-height: var(--navbar-link-height);
  letter-spacing: 1px;
  background-color: var(--dominant);
  color: var(--text-dark);
}

.nav-link {
  width: var(--navbar-link-width);
}

.nav-link.router-link-exact-active {
  color: var(--accent);
}

.nav-link:hover {
  color: var(--accent);
  transition: var(--default-transition);
}

.nav-menu-bars,
.nav-close-btn {
  display: none;
  font-size: 1.4em;
  background: none;
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
