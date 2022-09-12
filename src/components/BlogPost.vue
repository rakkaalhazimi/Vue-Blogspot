<template>
  <div class="blog-post">
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
  margin: var(--vw-margin) var(--vw-margin);
  color: $text-dark;
}

.blog-title {
  margin-bottom: var(--text-margin);
}
</style>
