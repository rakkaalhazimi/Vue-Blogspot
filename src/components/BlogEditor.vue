<template>
  <form id="post-form">
    <div class="post-form-item">
      <p>Title</p>
      <input id="post-title" type="text" placeholder="Enter title" />
    </div>

    <div class="post-form-item">
      <p>Descriptions</p>
      <input id="post-desc" type="text" placeholder="Enter description" />
    </div>

    <div class="post-form-item">
      <p>Tag</p>
      <input id="post-tag" type="text" />
    </div>

    <div class="post-form-item">
      <p>Date</p>
      <input id="post-date" type="date" />
    </div>

    <div class="post-form-item">
      <p>Post</p>
      <div id="editor" :editor="editor"></div>
    </div>

    <ButtonPublishPost @click.prevent="getContentText" />

  </form>


</template>

<script setup>
import { ref, onMounted } from "vue"
import Quill from "quill"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
import ButtonPublishPost from "./ButtonPublishPost.vue"


const editor = ref()
let getContentText = () => {console.log(editor.value.getText())}

onMounted(() => {
  let options = {
    theme: "snow",
    modules: { toolbar: {} },
    placeholder: "Enter text here..."
  }


  editor.value = new Quill("#editor", options)
  // editor.on("text-change", () => { })

  
})


</script>
