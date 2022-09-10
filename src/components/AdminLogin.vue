<template>
  <form id="admin-form">

    <button class="admin-close-btn" @click.prevent="hideAdminLogin"><i class="fa-solid fa-xmark"></i></button>

    <h2 class="admin-form-title">LOGIN</h2>
    <div class="admin-form-item">
      <label for="admin-username">Username</label>
      <div class="admin-form-bg">
        <input id="admin-username" type="text" placeholder="username">
      </div>
    </div>

    <div class="admin-form-item">
      <label for="admin-password">Password</label>
      <div class="admin-form-bg">
        <input id="admin-password" type="password" placeholder="password">
      </div>
    </div>

    <button class="btn" @click.prevent="login">Login</button>
  </form>

  <div id="admin-overlay"></div>
</template>

<script setup>
let adminLogin = document.getElementById("admin-form")
let adminOverlay = document.getElementById("admin-overlay")
let username = document.getElementById("admin-username")
let password = document.getElementById("admin-password")

function hideAdminLogin() {
  adminLogin.style.display = "none"
  adminOverlay.style.display = "none"
}

function login() {
  adminLogin.reset()
  if (username == "rakka" && password == "rakka") {
    alert("login berhasil")
    hideAdminLogin()

  } else alert("login gagal")
}
</script>

<style>
#admin-form {
  /* Display */
  display: none;
  flex-direction: column;
  gap: var(--small-space);

  /* Position */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  /* Sizing */
  padding: max(4vw, 40px) max(3vw, 30px);
  min-width: var(--admin-form-min-width);
  min-height: var(--admin-form-min-height);

  /* Effect */
  background-color: var(--dominant);
  color: var(--text-dark);
  border-radius: 5px;
  box-shadow: 0px 5px 10px var(--dominant-shade);
  text-align: left;
}

.admin-form-title {
  margin-bottom: var(--small-space);
}

.admin-form-item {
  display: flex;
  flex-direction: column;
  gap: var(--small-space);
  margin-bottom: var(--small-space);
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