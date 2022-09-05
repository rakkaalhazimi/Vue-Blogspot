<template>
  <div id="home" class="content-view">
    <HeaderHome/>
    <SearchBar v-model="keywords" />
    <ButtonAddPost/>
    <BlogCardList  :keywords="keywords" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderHome from '@/components/HeaderHome.vue';
import BlogCardList from '@/components/BlogCardList.vue';
import ButtonAddPost from '@/components/ButtonAddPost.vue';
import SearchBar from '@/components/SearchBar.vue';

let keywords = ref("")

</script>
