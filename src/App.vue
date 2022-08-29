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
    {title: "Blog#1 Title", desc: "Blog Descriptions", tags: "#Tags", id: 1},
    {title: "Blog#2 Title", desc: "Blog Descriptions", tags: "#Tags", id: 2},
    {title: "Blog#3 Title", desc: "Blog Descriptions", tags: "#Tags", id: 3},
    {title: "Blog#4 Title", desc: "Blog Descriptions", tags: "#Tags", id: 4},
  ]

  // Data to be exported
  let data = {
    contentMinHeight: "",
    blogPosts: blogPosts,
  }


  export default {
    data() {
      return data
    },

    provide() {
      return {blogPosts: this.blogPosts}
    },

    methods: {
      getNavHeight() {return this.$refs.navbar.offsetHeight},
      getFooterHeight() {return this.$refs.footer.offsetHeight}
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
  @import "./static/responsive.css";
</style>
