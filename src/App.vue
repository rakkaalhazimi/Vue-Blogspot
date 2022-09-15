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
@import "@/scss/main.css";
</style>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background: 
    radial-gradient(circle at left top, rgba(255,252,252,.1) 0%, rgba(0,0,0,0) 30%),
    radial-gradient(circle at right, rgba(255,252,252,.1) 0%, rgba(0,0,0,0) 40%);
  background-color: $dominant;
  text-align: center;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  min-height: 90vh;
  color: $text-dark;
}
</style>