<template>
  <div class="content-view">
    <BlogPost :title="post.title" :content="content" />
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from "vue";
  import { useRoute } from "vue-router";
  import { usePostStore } from "../stores/post";
  import BlogPost from "@/components/BlogPost.vue";


  const route = useRoute()
  const { getPostFromId } = usePostStore()

  // Get blog post based on Id
  // let post = getPostFromId($route.params.id, blogPosts)
  let post = getPostFromId(route.params.id)
  let content = defineAsyncComponent(post.content)

</script>