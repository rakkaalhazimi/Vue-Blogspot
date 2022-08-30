<template>
  <div class="blog-post">
    <h2 class="blog-title">{{ title }}</h2>
    <p class="blog-content" v-html="content"></p>
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: ['title', 'content']
  }
</script>

<style></style>