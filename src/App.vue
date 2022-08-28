<template>
  <!-- Navbar -->
  <nav ref="navbar" @click="getNavHeight">
    <router-link to="/">Home</router-link> |
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
  <footer ref="footer" @click="getFooterHeight">
    Copyright Rakka
  </footer>

</template>

<script>
  export default {
    data() {
      return {contentMinHeight: ""}
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
  @import "./static/footer.css";
</style>
