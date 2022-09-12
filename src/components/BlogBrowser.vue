<template>
  <div id="blog-browse">
    
    <!-- Title and subtitle -->
    <h2 class="subtitle">Browse My Posts</h2>
    <p class="desc">Start from here</p>

    <SearchBar />
    <BlogCardContainer />
  </div>
</template>

<script setup>
import BlogCardContainer from '@/components/BlogCardContainer.vue';
import SearchBar from "./SearchBar.vue";
</script>

<style lang="scss">
  #blog-browse {
    padding: $content-pad;
    color: $text-dark;
  }
</style>