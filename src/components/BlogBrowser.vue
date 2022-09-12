<template>
  <div id="blog-browse" class="content-pad text-dark">
    
    <!-- Title and subtitle -->
    <h2 class="text-left">Browse My Posts</h2>
    <p class="text-left">Start from here</p>

    <SearchBar />
    <BlogCardContainer />
  </div>
</template>

<script setup>
import BlogCardContainer from '@/components/BlogCardContainer.vue';
import SearchBar from "./SearchBar.vue";
</script>

<style lang="scss"></style>