<template>
  <div class="blog-card-list">
    <BlogCard v-for="blogPost in blogPosts" :key="blogPost.id" :title="blogPost.title" :desc="blogPost.desc"
      :tags="blogPost.tags" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import BlogCard from "./BlogCard.vue"

// Receive blog post from root App
let blogPosts = inject("blogPosts")
</script>


<style>
.blog-card-list {
  display: grid;
  grid-template-columns: repeat(3, var(--card-width));
  justify-content: center;
  column-gap: var(--gap);
  row-gap: var(--gap);
  margin: var(--medium-space) 0;
}

@media (max-width: 1200px) {
  .blog-card-list {
    grid-template-columns: repeat(2, var(--card-width));
  }
}

@media (max-width: 600px) {
  .blog-card-list {
    grid-template-columns: repeat(1, var(--card-width));
  }
}
</style>