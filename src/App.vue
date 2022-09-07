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



// Blog Posts
let blogPosts = reactive([
  { id: 1, title: "Blog#1 Machine Learning", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#1" },
  { id: 2, title: "Blog#2 Deep Learning", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#2" },
  { id: 3, title: "Blog#3 Cross Validation", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#3" },
  { id: 4, title: "Blog#4 Model Evaluation", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#4" },
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
@import "./static/main.css";
</style>
