<template>
  <form id="search-bar">
    <input
      type="text" 
      placeholder="Search Post" 
      v-model="store.keywords" 
    >
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
  
</template>

<script setup>
import { useSearchStore } from "../stores/search";

const store = useSearchStore()
</script>