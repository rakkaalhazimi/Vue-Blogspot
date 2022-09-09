<template>
  <p>{{ keywords }}</p>
  <div class="blog-card-list">
    <BlogCard 
      v-for="blogPost in filteredPosts"
      :key="blogPost.id" 
      :id="blogPost.id"
      :post="blogPost"
      />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";
import BlogCard from "./BlogCard.vue"


const { keywords, filteredPosts } = storeToRefs(usePostStore())
</script>
