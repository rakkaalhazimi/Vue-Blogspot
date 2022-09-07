import { ref, reactive, computed } from "vue"
import { defineStore } from "pinia"



function postStore() {
  
  // State
  const posts = reactive([
    { id: 1, title: "Blog#1 Machine Learning", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#1" },
    { id: 2, title: "Blog#2 Deep Learning", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#2" },
    { id: 3, title: "Blog#3 Cross Validation", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#3" },
    { id: 4, title: "Blog#4 Model Evaluation", desc: "Blog Descriptions", tags: "#Tags", content: "Content Blog#4" },
  ])

  const keywords = ref("")

  // Actions
  function getPostFromId(id, posts) {
    for (let post of posts) {
      if (post.id == id) { return post }
    }
    return null
  }

  // Getters
  function filterPosts() {
      return posts.filter((post) => { return post.title.toLowerCase().includes(keywords.value.toLowerCase()) })
  }
  const filteredPosts = computed(filterPosts)


  return { 
    keywords, 
    getPostFromId, 
    filteredPosts 
  }
}

export const usePostStore = defineStore("post", postStore)