<template>
  <!-- Navbar -->
  <nav ref="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Categories</router-link>
  </nav>

  <!-- Content -->
  <section 
    class="content"
    :style="{'min-height': contentMinHeight}" 
  >
    <router-view/>
  </section>

  <!-- Footer -->
  <footer ref="footer">
    Copyright Rakka
  </footer>

</template>

<script>

  // Blog Posts
  let blogPosts = [
    {id: 1, title: "Blog#1 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#1"},
    {id: 2, title: "Blog#2 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#2"},
    {id: 3, title: "Blog#3 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#3"},
    {id: 4, title: "Blog#4 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#4"},
  ]


  // Data to be exported
  let data = {
    contentMinHeight: "",
  }


  // Data or functions to be provided to child compoenents
  let provided = {
    blogPosts: blogPosts,
    getPostFromId: getPostFromId
  }


  // Function to be exported
  function getNavHeight() {return this.$refs.navbar.offsetHeight}
  function getFooterHeight() {return this.$refs.footer.offsetHeight}


  // Function to be provided to child components
  function getPostFromId(id, posts) {
    for (let post of posts) {
      if (post.id == id) {return post}
    }
    return null
  }


  export default {
    data() {return data},

    provide() {return provided},

    methods: {
      getNavHeight,
      getFooterHeight,
      getPostFromId
    },

    mounted() {
      // Set content min-height according to navbar and footer so that it can fit the viewport
      this.contentMinHeight = Math.abs(this.getNavHeight() + this.getFooterHeight() - window.innerHeight)
      this.contentMinHeight = `${this.contentMinHeight}px`
    }
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
