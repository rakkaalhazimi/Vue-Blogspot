<template>
  <BlogPost
    :title="post.title"
    :content="post.content"
  />
</template>

<script setup>
  import { inject } from "vue";
  import { useRoute } from "vue-router";
  import BlogPost from "@/components/Blog/BlogPost.vue";

  // Use router
  const route = useRoute()

  // Get parent's node provided variables
  let blogPosts = inject('blogPosts')
  let getPostFromId = inject('getPostFromId')

  // Get blog post based on Id
  // let post = getPostFromId($route.params.id, blogPosts)
  let post = getPostFromId(route.params.id, blogPosts)
</script>