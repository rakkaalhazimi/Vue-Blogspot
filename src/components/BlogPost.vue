<template>
  <div id="blog-post">
    <h2 id="blog-title">{{ title }}</h2>
    <component :is="content"></component>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';


defineProps(["title", "content"])
</script>

<style lang="scss">
#blog-post {
  color: $text-dark;
  margin: repeat(5vw);
}

#blog-title {
  margin-bottom: 1em;
}
</style>
