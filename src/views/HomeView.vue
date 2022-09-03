<template>
  <div id="home" class="content-view">
    <HeaderHome/>
    <ButtonAddPost/>
    <BlogCardList/>
  </div>
</template>

<script setup>
import HeaderHome from '@/components/HeaderHome.vue';
import BlogCardList from '@/components/BlogCardList.vue';
import ButtonAddPost from '@/components/ButtonAddPost.vue';
</script>
