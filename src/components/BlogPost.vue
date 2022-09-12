<template>
  <div id="blog-post">
    <h2 id="blog-title">{{ title }}</h2>
    <p id="blog-content" v-html="content"></p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  content: String,
})
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
