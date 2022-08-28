<template>
  <div class="footer-container">
    <h1>Hello Footer {{ msg }}</h1>

  </div>
</template>

<script>
  export default {
    name: 'FooterPage',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  
</style>