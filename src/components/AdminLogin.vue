<template>
  <form id="admin-form" class="form-card floating-center glow">

    <button class="close-btn" @click.prevent="hideAdminLogin">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <h2 class="subtitle">LOGIN</h2>

    <div class="form-item">
      <label for="admin-username">Username</label>
      <input id="admin-username" class="input-text" type="text" placeholder="username">
    </div>

    <div class="form-item">
      <label for="admin-password">Password</label>
      <input id="admin-password" class="input-text" type="password" placeholder="password">
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

<style lang="scss">
#admin-form {
  display: none;
}
</style>