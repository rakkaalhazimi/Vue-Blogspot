<template>
  <div id="home" class="content-view">
    <HeaderHome/>
    <SearchBar />
    <ButtonAddPost v-if="isLogin"/>
    <BlogCardContainer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderHome from '@/components/HeaderHome.vue';
import BlogCardContainer from '@/components/BlogCardContainer.vue';
import ButtonAddPost from '@/components/ButtonAddPost.vue';
import SearchBar from '@/components/SearchBar.vue';

let isLogin = ref(false)

</script>
