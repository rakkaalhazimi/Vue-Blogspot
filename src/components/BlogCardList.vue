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

  let blogPosts = [
    {title: "Blog#1 Title", desc: "Blog Descriptions", tags: "#Tags", id: 1},
    {title: "Blog#2 Title", desc: "Blog Descriptions", tags: "#Tags", id: 2},
    {title: "Blog#3 Title", desc: "Blog Descriptions", tags: "#Tags", id: 3},
    {title: "Blog#4 Title", desc: "Blog Descriptions", tags: "#Tags", id: 4},
  ]

  export default {
    name: 'BlogCardList',
    components : {BlogCard},
    data() {return {blogPosts: blogPosts}}
  }
</script>
