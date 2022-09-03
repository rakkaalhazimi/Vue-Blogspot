<template>
  <div id="home" class="content-view">
    <SectionHeaderHome/>
    <ButtonAddPost/>
    <BlogCardList/>
  </div>
</template>

<script setup>
import SectionHeaderHome from '@/components/SectionHeaderHome.vue';
import BlogCardList from '@/components/BlogCardList.vue';
import ButtonAddPost from '@/components/ButtonAddPost.vue';
</script>
