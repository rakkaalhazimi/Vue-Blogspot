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
:root {
  /* Color */
  --dominant: #222831;
  --dominant-shade: #13171D;
  --dominant-transparent: rgba(34, 40, 49, 0.8);
  --complement: #D3FBD8;
  --accent: #00C6B9;
  --text-dark: #f0eeee;
  --text-light: #181818;

  /* Margin */
  --text-margin: 20px;
  --vw-margin: 5vw;

  --small-space: 10px;
  --medium-space: 20px;
  --big-space: 30px;

  /* Padding */
  --small-padding: 5px;
  --medium-padding: 10px;
  --big-padding: 15px;

  --button-padding: 15px;
  --input-padding: 15px;

  /* Size */
  --navbar-link-height: 50px;
  --navbar-link-width: 120px;

  --card-width: 300px;
  --card-height: 300px;

  --photo-width: 150px;
  --photo-height: 150px;

  --admin-form-min-width: 300px;
  --admin-form-min-height: 400px;

  --icon-size: 1.2em;

  /* Transition */
  --default-transition: all 0.5s ease;
}

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
</style>
