<template>
  <div class="blog-card-list">
    <BlogCard 
      v-for="blogPost in blogPosts" 
      :key="blogPost.id"
      :title="blogPost.title"
      :desc="blogPost.desc"
      :tags="blogPost.tags"
    />
  </div>
</template>

<script setup>
  import { inject } from "vue";
  import BlogCard from "./BlogCard.vue"

  // Receive blog post from root App
  let blogPosts = inject("blogPosts")
</script>
