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

// List of toolbar see https://quilljs.com/docs/formats/
const toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'align': [] }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction
  
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  ['blockquote', 'code-block'],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

  ['link', 'image', 'formula'],                     // embed

  ['clean']                                         // remove formatting button
];
let getContentText = () => { console.log(editor.value.getContents()) }

onMounted(() => {
  let options = {
    theme: "snow",

    modules: {
      toolbar: toolbarOptions
    },

    placeholder: "Enter text here..."
  }


  editor.value = new Quill("#editor", options)
  // editor.on("text-change", () => { })


})


</script>
