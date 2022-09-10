<template>
  <AdminLogin />

  <SectionNavigation />

  <SectionContent />

  <SectionFooter />
</template>

<script setup>
import AdminLogin from "./components/AdminLogin.vue"
import SectionNavigation from "./components/SectionNavigation.vue"
import SectionFooter from "./components/SectionFooter.vue"
import SectionContent from "./components/SectionContent.vue"
</script>

<style>
/* ==================== 
 1. Variables
==================== */
:root {

  /* -------------------- 
   1.1 Color Variables
  --------------------- */
  --dominant: #222831;
  --dominant-shade: #13171D;
  --dominant-transparent: rgba(34, 40, 49, 0.8);
  --complement: #D3FBD8;
  --accent: #00C6B9;
  --text-dark: #f0eeee;
  --text-light: #181818;

  /* -------------------- 
   1.2 Margin Variables
  --------------------- */
  --text-margin: 20px;
  --vw-margin: 5vw;

  --small-space: 10px;
  --medium-space: 20px;
  --big-space: 30px;

  /* -------------------- 
   1.3 Padding Variables
  --------------------- */
  --small-padding: 5px;
  --medium-padding: 10px;
  --big-padding: 15px;

  --button-padding: 15px;
  --input-padding: 15px;

  /* -------------------- 
  1.4 Size Variables
  --------------------- */
  --navbar-link-height: 50px;
  --navbar-link-width: 120px;

  --card-width: 300px;
  --card-height: 300px;

  --photo-width: 150px;
  --photo-height: 150px;

  --admin-form-min-width: 300px;
  --admin-form-min-height: 400px;

  --icon-size: 1.2em;

  /* ---------------------- 
  1.4 Transition Variables
  ------------------------- */
  --default-transition: all 0.5s ease;
}

/* ==================== 
 2. Default Styles
==================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

a {
  display: inline-block;
  text-decoration: none;
}

button {
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

input {
  border: none;
}

input:focus {
  outline: none;
}

ul {
  list-style-type: none;
}

#app {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: var(--dominant);
  color: var(--text-dark);
  text-align: center;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--medium-padding);
  min-height: 50vh;
  background-color: var(--dominant-shade);
  color: var(--text-dark);
}

header h1 {
  font-size: clamp(1.2rem, 5vw, 3.5rem);
}

header h2 {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
}

header h3 {
  font-size: clamp(1.17rem, 2vw, 1.5rem);
}

header h4 {
  font-size: clamp(1rem, 1.5vw, 1.17rem);
}

header p {
  font-size: clamp(0.8rem, 1.2vw, 1.1rem);
}

/* ==================== 
 3. Components
==================== */

/* Button */
.btn {
  padding: 1em;
  min-width: 6em;
  border-radius: 4px;
  background-color: var(--dominant-shade);
  color: var(--text-dark);
  transition: var(--default-transition);
}

.btn:hover {
  background-color: var(--dominant-shade);
  color: var(--accent);
  box-shadow: 0 2px 10px var(--accent);
}

.btn:active {
  color: var(--complement);
  box-shadow: 0 2px 10px var(--complement);
  transition: 0s;
}

.close-btn {
  position: absolute;
  top: 5%;
  right: 5%;
  background: transparent;
  color: var(--text-dark);
  font-size: 1.2em;
}

/* List */
.form-item {
  display: flex;
  flex-direction: column;
  gap: var(--small-space);
  margin-bottom: var(--small-space);
}

/* Card */
.form-card {
  display: flex;
  flex-direction: column;
  gap: var(--small-space);

  padding: max(4vw, 40px) max(3vw, 30px);
  width: max(20vw, 300px);
  height: auto;

  text-align: left;
}

/* Position */
.floating-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}


/* Layer */
.overlay {
  display: none;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Input */
.input-text {
  padding: .8em;
  width: 100%;
  background-color: var(--text-dark);
  color: var(--text-light);
}


/* Typography */
.title {
  margin-bottom: .5em;
}


/* Effect */
.glow {
  background-color: var(--dominant);
  color: var(--text-dark);
  border-radius: 5px;
  box-shadow: 0px 5px 10px var(--dominant-shade);
}
</style>
