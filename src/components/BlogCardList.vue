<template>
  <p>{{ keywords }}</p>
  <div class="blog-card-list">
    <BlogCard v-for="blogPost in blogPostsFiltered" :key="blogPost.id" :post="blogPost" />
  </div>
</template>

<script setup>
import { computed, defineProps, inject } from "vue";
import BlogCard from "./BlogCard.vue"

const props = defineProps(["keywords"])

// Receive blog post from root App
let blogPosts = inject("blogPosts")

let blogPostsFiltered = computed(() => 
  blogPosts.filter((post) => { return post.title.toLowerCase().includes(props.keywords.toLowerCase()) }
))
</script>
