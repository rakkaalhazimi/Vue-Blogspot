<template>
  <form>
    <input type="text" placeholder="Enter keywords" v-model="keywords">
    <SearchBarButton></SearchBarButton>
  </form>
  
  <p>{{ keywords }}</p>
</template>

<script>

  import SearchBarButton from './SearchBarButton.vue';

  export default {
    name: "SearchBar",
    components: { 
      SearchBarButton 
    },

    data () {
      return {
        keywords: ''
      }
    }
  }
</script>

<style scoped>
  input[type='text'] {
    padding: 5px;

    width: 600px;
    height: 20px;

    border-radius: 20px 0 0 20px;
  }
</style>