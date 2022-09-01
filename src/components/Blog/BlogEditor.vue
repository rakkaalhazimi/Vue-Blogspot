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
  </form>


  <div id="editor" :editor="editor"></div>
</template>

<script setup>
import { onMounted } from "vue"
import Quill from "quill"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"


onMounted(() => {
  let options = {
    theme: "snow",
    modules: { toolbar: {} },
    placeholder: "Enter text here..."
  }


  let editor = new Quill("#editor", options)
  editor.on("text-change", () => { })
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
  max-width: 300px;
  text-align: left;
}

.post-form-item input {
  padding: var(--small-padding);
}

#editor,
.ql-toolbar {
  background-color: var(--complement);
  color: var(--dominant);
}
</style>