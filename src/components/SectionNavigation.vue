<template>
  <nav>
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

      <!-- Navbar login button -->
      <li id="nav-login" v-if="!isLogin">
        <button @click="showAdminLogin" class="nav-link">Login</button>
      </li>
      <li id="nav-logout" v-if="isLogin">
        <button @click="userLogout" class="nav-link">Logout</button>
      </li>

    </ul>

    <!-- Navbar menu bar -->
    <button id="nav-menu-btn" @click="showHideNavbar">
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

<style lang="scss">
nav {
  @include sticky-top();
  @include flex-row($gap: 5rem);

  padding: $navbar-pad;
  width: 100%;
  color: $text-dark;
  backdrop-filter: blur(3px);
}

#nav-link-container {
  @include flex-row($gap: 3rem);
  width: 100%;
}

.nav-link {
  color: $text-dark;
  font-size: .9rem;
  transition: $default-transition;

  &:hover {
    color: $accent;
  }
}

#nav-login,
#nav-logout {
  margin-left: auto;
}

#nav-menu-btn {
  display: none;
  @include icon-btn;
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
    background-color: $dominant;
    transition: $default-transition;
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
