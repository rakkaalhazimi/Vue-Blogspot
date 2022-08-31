<template>
  <!-- Navbar -->
  <nav ref="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Categories</router-link>
  </nav>

  <!-- Content -->
  <section class="content">
    <router-view/>
  </section>

  <!-- Footer -->
  <footer ref="footer">
    Copyright Rakka
  </footer>

</template>

<script setup>
  import {ref, reactive, provide} from "vue"

  // Blog Posts
  let blogPosts = reactive([
    {id: 1, title: "Blog#1 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#1"},
    {id: 2, title: "Blog#2 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#2"},
    {id: 3, title: "Blog#3 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#3"},
    {id: 4, title: "Blog#4 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#4"},
  ])


  // Data to be exported
  let sample = ref(0)
  sample


  // Data or functions to be provided to child compoenents
  provide("blogPosts", blogPosts)
  provide("getPostFromId", getPostFromId)


  // Function to be exported


  // Function to be provided to child components
  function getPostFromId(id, posts) {
    for (let post of posts) {
      if (post.id == id) {return post}
    }
    return null
  }

</script>

<style>
  @import "./static/main.css";
  @import "./static/navbar.css";
  @import "./static/header.css";
  @import "./static/footer.css";
  @import "./static/card.css";
  @import "./static/post.css";
  @import "./static/responsive.css";
</style>
