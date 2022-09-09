<template>
  <div id="search-bar">
    <input
      type="text" 
      placeholder="Search Post" 
      v-model="postStore.keywords" 
    >
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
  
</template>

<script setup>
import { usePostStore } from "../stores/post";

const postStore = usePostStore()
</script>