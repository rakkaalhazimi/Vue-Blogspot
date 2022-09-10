<template>
  <div class="blog-card">
    <router-link :to="'/post/' + id" class="blog-card-link">
      <img class="blog-card-image" src="../assets/logo.png" alt="Blog picture" />
    </router-link>
    <h3>{{ post.title }}</h3>
    <p>{{ post.desc }}</p>
    <p>{{ post.tags }}</p>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  post: Object,
  id: Number
})
</script>

<style>
.blog-card {
  width: var(--card-width);
  height: var(--card-height);
  background-color: var(--dominant);
  color: var(--text-dark);
}

.blog-card:hover {
  /* box-shadow: 0px 2px 5px 1px var(--accent); */
  background-color: var(--complement);
  color: var(--text-light);
  transition: var(--default-transition);
}

.blog-card-link,
.blog-card-image {
  width: 100%;
}

.blog-card-image {
  height: 200px;
  object-fit: contain;
}
</style>