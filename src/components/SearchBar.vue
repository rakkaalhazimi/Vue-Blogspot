<template>
  <div id="search-bar">
    <input id="search-input" class="filled-input-text" type="text" placeholder="Search Post" v-model="postStore.keywords">
  </div>

</template>

<script setup>
import { usePostStore } from "../stores/post";

const postStore = usePostStore()
</script>

<style lang="scss">
  #search-bar {
    margin-bottom: 5rem;
  }

  #search-input {
    width: 50vw;
  }
</style>