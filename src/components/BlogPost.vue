<template>
  <div class="blog-post">
    <h2 class="blog-title">{{  title  }}</h2>
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

<style>
.blog-post {
  margin: var(--side-margin) var(--side-margin);
  color: var(--complement);
}

.blog-title {
  margin-bottom: var(--text-margin);
}

</style>