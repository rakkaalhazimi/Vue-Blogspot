<template>
  <div class="blog-card">
    <router-link :to="'/post/' + id" class="blog-card-link">
      <img class="blog-card-image" src="../assets/logo.png" alt="Blog picture" />
    </router-link>
    <h3>{{  post.title  }}</h3>
    <p>{{  post.desc  }}</p>
    <p>{{  post.tags  }}</p>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  post: Object,
  id: Number
})
</script>