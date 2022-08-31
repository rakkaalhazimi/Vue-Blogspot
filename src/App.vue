<template>
  <NavigationBar />

  <ContentSection />

  <FooterSection />
</template>

<script setup>
import { ref, reactive, provide } from "vue"
import NavigationBar from "./components/Navigation/NavigationBar.vue"
import FooterSection from "./components/Footer/FooterSection.vue"
import ContentSection from "./components/Content/ContentSection.vue";

// Blog Posts
let blogPosts = reactive([
  { id: 1, title: "Blog#1 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#1" },
  { id: 2, title: "Blog#2 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#2" },
  { id: 3, title: "Blog#3 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#3" },
  { id: 4, title: "Blog#4 Title", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#4" },
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
    if (post.id == id) { return post }
  }
  return null
}
</script>

<style>
/* Initial Setup */
:root {
  --dominant: #222831;
  --complement: #D3FBD8;
  --accent: #00C6B9;

  --text-margin: 20px;
  --side-margin: 5vw;
  --space: 20px;

  --small-padding: 5px;
  --medium-padding: 10px;
  --big-padding: 15px;

  --navbar-link-height: 50px;
  --navbar-link-width: 120px;

  --card-width: 300px;
  --card-height: 300px;

  --gap: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

h3 {
  font-size: 1.5em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--dominant);
  color: var(--complement);
  text-align: center;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2.5em;
  }

}
</style>
