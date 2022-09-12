<template>
  <p>{{ keywords }}</p>
  <div class="blog-card-container">
    <BlogCard v-for="blogPost in filteredPosts" :key="blogPost.id" :id="blogPost.id" :post="blogPost" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";
import BlogCard from "./BlogCard.vue"


const { keywords, filteredPosts } = storeToRefs(usePostStore())
</script>

<style lang="scss">
.blog-card-container {
  display: grid;
  grid-template-columns: repeat(2, var(--card-width));
  justify-content: center;
  column-gap: var(--medium-space);
  row-gap: var(--medium-space);
}

@media (max-width: 600px) {
  .blog-card-container {
    grid-template-columns: repeat(1, var(--card-width));
  }
}

@media (min-width: 1200px) {
  .blog-card-container {
    grid-template-columns: repeat(3, var(--card-width));
  }
}
</style>
