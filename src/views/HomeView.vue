<template>
  <div class="home">
    <HeaderSection/>
    <AddBlogButton/>
    <BlogCardList/>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HeaderSection from '@/components/Header/HeaderSection.vue';
import BlogCardList from '@/components/Blog/BlogCardList.vue';
import AddBlogButton from '@/components/Buttons/AddBlogButton.vue';
</script>
