<template>
  <div id="add-blog" class="content-view">
    <HeaderBlogEditor />
    <BlogEditor v-once />
  </div>
</template>

<script setup>
import BlogEditor from '@/components/BlogEditor.vue';
import HeaderBlogEditor from '@/components/HeaderBlogEditor.vue';
</script>