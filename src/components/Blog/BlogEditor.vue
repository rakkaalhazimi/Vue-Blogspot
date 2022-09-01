<template>
  <div id="editor" :editor="editor"></div>
</template>

<script setup>
import { onMounted } from "vue"
import Quill from "quill"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"

onMounted(() => {
  let options = {theme: "snow"}
  let editor = new Quill("#editor", options)
  editor.on("text-change", () => {})
})


</script>

<style>

</style>