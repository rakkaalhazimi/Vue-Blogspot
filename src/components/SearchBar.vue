<template>
  <div id="search-bar">
    <input class="input-text" type="text" placeholder="Search Post" v-model="postStore.keywords">
  </div>

</template>

<script setup>
import { usePostStore } from "../stores/post";

const postStore = usePostStore()
</script>

<style lang="scss"></style>