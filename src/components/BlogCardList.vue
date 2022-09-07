<template>
  <p>{{ store.keywords }}</p>
  <div class="blog-card-list">
    <BlogCard v-for="blogPost in blogPostsFiltered" :key="blogPost.id" :post="blogPost" />
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { useSearchStore } from "../stores/search";
import BlogCard from "./BlogCard.vue"


const store = useSearchStore()

// Receive blog post from root App
let blogPosts = inject("blogPosts")

let blogPostsFiltered = computed(() => 
  blogPosts.filter((post) => { return post.title.toLowerCase().includes(store.keywords.toLowerCase()) }
))
</script>
