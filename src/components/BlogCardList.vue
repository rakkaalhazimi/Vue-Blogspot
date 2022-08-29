<template>
  <div class="blog-card-list">
    <BlogCard v-for="n in 10" :key="n"/>
  </div>
</template>

<script>
  import BlogCard from "./BlogCard.vue"

  export default {
    name: 'BlogCardList',
    components : {BlogCard}
  }
</script>

<style>

</style>