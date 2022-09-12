<template>
  <div class="blog-post text-dark">
    <h2 class="blog-title">{{ title }}</h2>
    <p class="blog-content" v-html="content"></p>
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
.blog-post {
  margin: repeat(5vw);
}

.blog-title {
  margin-bottom: 1em;
}
</style>
