<template>
  <div class="blog-card-list">
    <BlogCard 
      v-for="blogPost in blogPosts" 
      :key="blogPost.id"
      :title="blogPost.title"
      :desc="blogPost.desc"
      :tags="blogPost.tags"
    />
  </div>
</template>

<script>
  import BlogCard from "./BlogCard.vue"

  // Receive blog post from root App
  export default {
    name: 'BlogCardList',
    components : {BlogCard},
    inject: ['blogPosts'],  
  }
</script>
