<template>
  <div class="blog-post">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: ['title', 'content']
  }
</script>

<style></style>