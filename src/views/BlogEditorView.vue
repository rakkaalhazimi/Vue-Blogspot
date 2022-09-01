<template>
  <div id="add-blog" class="content-view">
    <h1>Add New Post</h1>
    <BlogEditor v-once />
  </div>
</template>

<script setup>
import BlogEditor from '@/components/Blog/BlogEditor.vue';
</script>