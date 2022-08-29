<template>
  <div class="blog-card">
    <img src="../assets/logo.png" alt="Blog picture"/>
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <p>{{ tags }}</p>
  </div>

</template>

<script>
   export default {
    name: 'BlogCard',
    props: ['title', 'desc', 'tags']
  }
</script>