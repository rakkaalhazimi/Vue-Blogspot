<template>
  <nav>
    <h1 class="nav-logo">ALHAZIMI</h1>
    <ul class="nav-link-container">
      <li class="nav-link-item">
        <button class="nav-close-btn" @click="hideNavbar"><i class="fa-solid fa-xmark"></i></button>
      </li>
      <li class="nav-link-item"><router-link to="/" class="nav-link" >Home</router-link></li>
      <li class="nav-link-item"><router-link to="/about" class="nav-link" >About</router-link></li>
      <li class="nav-link-item"><router-link to="/projects" class="nav-link" >Projects</router-link></li>
      <li class="nav-link-item"><button class="nav-link login-btn">Login</button></li>
    </ul>
    <button class="nav-menu-bars" @click="showNavbar">
      <i class="fa-solid fa-bars"></i>
    </button>
  </nav>
</template>

<script setup>
  function showNavbar() {
    let nav = document.getElementsByClassName("nav-link-container")[0]
    nav.style.right = 0
  }

  function hideNavbar() {
    let nav = document.getElementsByClassName("nav-link-container")[0]
    nav.style.right = "-90vw"
  }


</script>
