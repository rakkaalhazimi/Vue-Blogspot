<template>
  <form id="post-form">
    <div class="post-form-item">
      <p class="post-form-label">Title</p>
      <input id="post-title" type="text" placeholder="Enter title" />
    </div>

    <div class="post-form-item">
      <p class="post-form-label">Descriptions</p>
      <input id="post-desc" type="text" placeholder="Enter description" />
    </div>

    <div class="post-form-item">
      <p class="post-form-label">Tag</p>
      <input id="post-tag" type="text" />
    </div>

    <div class="post-form-item">
      <p class="post-form-label">Date</p>
      <input id="post-date" type="date" />
    </div>

    <div id="editor-item" class="post-form-item">
      <p class="post-form-label">Post</p>
      <div id="editor" :editor="editor"></div>
    </div>

    <button class="btn" @click.prevent="showPreview">Publish</button>

    <div ref="preview" class="preview"></div>

  </form>


</template>

<script setup>
import { ref, onMounted } from "vue"
import Quill from "quill"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"


const editor = ref()
let preview = ref()

const toolbarOptions = [

  // List of toolbar see https://quilljs.com/docs/formats/
  // Inline Styles
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],

  // Paragraph
  [{ 'align': [] }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],

  // Text Decoration and Symbols
  [{ 'script': 'sub' }, { 'script': 'super' }],
  ['blockquote', 'code-block'],

  // Colors
  [{ 'color': [] }, { 'background': [] }],

  // Embed
  ['link', 'image', 'formula'],

  // Reset
  ['clean']
]

// Editor functions
// function getContentText() { 
  // console.log(editor.value.getContents()) 
// }

function showPreview() {
  preview.value.innerHTML = editor.value.getText()
}


onMounted(() => {
  let options = {
    theme: "snow",

    modules: {
      toolbar: toolbarOptions
    },

    placeholder: "Enter text here..."
  }


  editor.value = new Quill("#editor", options)
  editor.value.on("text-change", showPreview)


})


</script>
