<template>
  <form id="post-form">
    <div class="post-form-item">
      <p>Title</p>
      <input id="post-title" type="text" />
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

<style>
.post-form {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.post-form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--medium-space);
  text-align: left;
}

.post-form-item input {
  max-width: 300px;
  padding: var(--small-padding);
}

#editor,
.ql-toolbar {
  background-color: var(--complement);
  color: var(--dominant);
}
</style>