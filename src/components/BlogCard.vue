<template>
  <div class="blog-card">
    <router-link :to="'/post/' + this.$.vnode.key">
      <img src="../assets/logo.png" alt="Blog picture"/>
    </router-link>
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