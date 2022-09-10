<template>
  <form id="admin-form" class="floating-box glow">

    <button class="admin-close-btn" @click.prevent="hideAdminLogin">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <h2 class="title">LOGIN</h2>
    <div class="form-item">
      <label for="admin-username">Username</label>
      <div class="admin-form-bg">
        <input id="admin-username" type="text" placeholder="username">
      </div>
    </div>

    <div class="form-item">
      <label for="admin-password">Password</label>
      <div class="admin-form-bg">
        <input id="admin-password" type="password" placeholder="password">
      </div>
    </div>

    <button class="btn" @click.prevent="login">Login</button>
  </form>

  <div id="admin-overlay" class="overlay"></div>
</template>

<script setup>
import { onMounted } from "vue"
import { useUserStore } from "../stores/user"


const { userLogin } = useUserStore()

let adminLogin, adminOverlay, username, password

onMounted(() => {
  adminLogin = document.getElementById("admin-form")
  adminOverlay = document.getElementById("admin-overlay")
  username = document.getElementById("admin-username")
  password = document.getElementById("admin-password")
})

function hideAdminLogin() {
  adminLogin.style.display = "none"
  adminOverlay.style.display = "none"
}

function login() {
  if (username.value == "rakka" && password.value == "rakka") {
    alert("login berhasil")
    hideAdminLogin()
    userLogin()
    
  } else alert("login gagal")

  adminLogin.reset()
}
</script>

<style>
#admin-form {
  /* Display */
  display: none;
  flex-direction: column;
  gap: var(--small-space);

  /* Sizing */
  padding: max(4vw, 40px) max(3vw, 30px);
  min-width: var(--admin-form-min-width);
  min-height: var(--admin-form-min-height);

  text-align: left;
}

.admin-form-bg {
  padding: var(--medium-padding);
  background-color: var(--complement);
}

.admin-form-bg input {
  width: 100%;
  background-color: var(--complement);
}

.admin-close-btn {
  position: absolute;
  top: 5%;
  right: 5%;
  background: transparent;
  color: var(--text-dark);
  font-size: 1.2em;

}

.admin-login-btn {
  margin-top: auto;
  padding: var(--button-padding);
  background-color: var(--accent);
  color: var(--text-light);
  font-weight: bold;
  transition: var(--default-transition);


}

.admin-login-btn:hover {
  color: var(--text-dark);
}

#admin-overlay {
  display: none;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>