<template>
  <form id="admin-form">

    <h2 class="subtitle medium-mb">LOGIN</h2>
    
    <div class="form-item medium-low-mb">
      <label for="admin-username">Username</label>
      <input id="admin-username" class="filled-input-text" type="text" placeholder="username">
    </div>

    <div class="form-item medium-low-mb">
      <label for="admin-password">Password</label>
      <input id="admin-password" class="filled-input-text" type="password" placeholder="password">
    </div>

    <button class="hollow-btn" @click.prevent="login">Login</button>
  </form>

  <div id="admin-overlay" class="overlay"></div>
</template>

<script setup>
import router from "@/router"
import { onMounted, onBeforeMount } from "vue"
import { useUserStore } from "../stores/user"


const userStore = useUserStore()
let adminForm, username, password


// Before mount
onBeforeMount(() => {
  if (userStore.isLogin) router.push({name: "home"})
})

// After mount
onMounted(() => {
  adminForm = document.getElementById("admin-form")
  username = document.getElementById("admin-username")
  password = document.getElementById("admin-password")
})


function login() {
  if (username.value == "rakka" && password.value == "rakka") {
    alert("login berhasil")
    // Login the user
    userStore.login()

    // Reset form
    adminForm.reset()

    
  } else alert("login gagal")
}
</script>

<style lang="scss">
#admin-form {
  @include flex-col($justify: center);
  color: $text-dark;
}

.form-item {
  @include flex-col;
  width: max(300px, 10vw);
  max-width: calc(100% - 20px);
}
</style>