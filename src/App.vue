<template>
  <SectionNavigation />

  <SectionContent />

  <SectionFooter />
</template>

<script setup>
import { ref, reactive, provide } from "vue"
import SectionNavigation from "./components/SectionNavigation.vue"
import SectionFooter from "./components/SectionFooter.vue"
import SectionContent from "./components/SectionContent.vue"
import "@fortawesome/fontawesome-free/js/brands.js"
import "@fortawesome/fontawesome-free/js/regular.js"
import "@fortawesome/fontawesome-free/js/fontawesome.js"


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
  
  --small-space: 10px;
  --medium-space: 20px;
  --big-space: 30px;

  --small-padding: 5px;
  --medium-padding: 10px;
  --big-padding: 15px;

  --navbar-link-height: 50px;
  --navbar-link-width: 120px;

  --card-width: 300px;
  --card-height: 300px;

  --icon-size: 1.2em;

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

a {
  text-decoration: none;
}

button {
  border: none;
}

input:focus {
  outline: none;
}

ul {
  list-style-type: none;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--dominant);
  color: var(--complement);
  text-align: center;
}

.content-view {
  margin: 0 10vw;
}

/* Wide Screen: Desktop */
@media (min-width: 1200px) {
  .content-view {
    margin: 0 20vw;
  }
}

/* Small Screen: Tablet, Smartphone */
@media (max-width: 600px) {
  h1 {
    font-size: 2.5em;
  }

  .content-view {
    margin: 0 2vw;
  }

}
</style>
