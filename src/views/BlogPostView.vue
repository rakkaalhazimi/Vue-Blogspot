<template>
  <BlogPost
    :title="post.title"
    :content="post.content"
  />
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";

// Get blog post based on Id
export default {
  inject: ['blogPosts', 'getPostFromId'],
  components: {BlogPost},
  data() {
    return {post: this.getPostFromId(this.$route.params.id, this.blogPosts)}
  }
}
</script>