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
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
