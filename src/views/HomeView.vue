<template>
  <div class="home">
    <HeaderSection/>
    <BlogCardList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue';
import BlogCardList from '@/components/BlogCardList.vue';


export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    BlogCardList,
}
}
</script>
