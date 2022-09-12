<template>
  <div id="home" class="content-view">
    <HeaderHome />
    <BlogCoverage />
    <SearchBar />
    <BlogBrowser />
    <ButtonAddPost v-if="isLogin" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderHome from '@/components/HeaderHome.vue';
import BlogCoverage from '@/components/BlogCoverage.vue';
import ButtonAddPost from '@/components/ButtonAddPost.vue';
import BlogBrowser from '@/components/BlogBrowser.vue';

let isLogin = ref(false)

</script>
