<template>
  <SectionNavigation />

  <SectionContent />

  <SectionFooter />
</template>

<script setup>
import SectionNavigation from "./components/SectionNavigation.vue"
import SectionFooter from "./components/SectionFooter.vue"
import SectionContent from "./components/SectionContent.vue"
</script>

<style>
@import "./static/main.css";
</style>
