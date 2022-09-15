<template>
  <div id="blog-browse">

    <!-- Title and subtitle -->
    <h2 id="blog-browse-subheader">Browse My Posts</h2>
    <p id="blog-browse-desc">Start from here</p>

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
  @include flex-col($justify: center);
  padding: $content-pad;
  color: $text-dark;
}

#blog-browse-subheader {
  @include subheader-text;
}

#blog-browse-desc {
  margin-bottom: 2rem;
}
</style>