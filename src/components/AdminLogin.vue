<template>
  <form id="admin-form">

    <button class="admin-close-btn" @click.prevent="hideAdminLogin"><i class="fa-solid fa-xmark"></i></button>
    
    <h2 class="admin-form-title">LOGIN</h2>
    <div class="admin-form-item">
      <label for="admin-username">Username</label>
      <div class="admin-form-bg">
        <input id="admin-username" type="text" placeholder="username" >
      </div>
    </div>

    <div class="admin-form-item">
      <label for="admin-password">Password</label>
      <div class="admin-form-bg">
        <input id="admin-password" type="password" placeholder="password" >
      </div>
    </div>

    <button class="btn" @click.prevent="login">Login</button>
  </form>

  <div id="admin-overlay"></div>
</template>

<script setup>
  function hideAdminLogin() {
    let adminLogin = document.getElementById("admin-form")
    let adminOverlay = document.getElementById("admin-overlay")
    adminLogin.style.display = "none"
    adminOverlay.style.display = "none"
  }

  function login() {
    let adminLogin = document.getElementById("admin-form")
    let username = document.getElementById("admin-username")
    let password = document.getElementById("admin-password")

    adminLogin.reset()
    if (username == "rakka" && password == "rakka") {
      alert("login berhasil")
      hideAdminLogin()
      
    } else alert("login gagal")
  }
</script>