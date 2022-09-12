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
   Default Styles
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
  background: transparent;
  border: none;
  cursor: pointer;
}

input {
  border: none;
}

input:focus {
  outline: none;
}

img {
  align-self: center;
}

ul {
  list-style-type: none;
}

.title {
  font-size: 2rem;
  margin-bottom: .5rem;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
}

.desc {
  font-size: 1rem;
  font-weight: normal;
  text-align: left;
  margin-bottom: 2rem;
}

.small-text {
  font-size: 0.9em;
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
</style>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: $dominant;
  text-align: center;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  min-height: 50vh;
  color: $text-dark;
}
</style>