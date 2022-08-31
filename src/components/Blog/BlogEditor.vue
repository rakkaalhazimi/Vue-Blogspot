<template>
  <div id="editor-toolbar">
    <span class="toolbar-items">
      <select name="" id="">
        <option>Arial</option>
        <option>Sans</option>
      </select>

      <select name="" id="">
        <option v-for="n in 8" :value="n" :key="n">{{ n }}</option>
      </select>

    </span>

    <span class="toolbar-items">
      <FontAwesomeIcon icon="fa-solid fa-heading" class="editor-heading editor-toolbar-icon" />
    </span>

    <span class="toolbar-items">
      <FontAwesomeIcon icon="fa-solid fa-bold" class="editor-font-weight editor-toolbar-icon" />
      <FontAwesomeIcon icon="fa-solid fa-italic" class="editor-font-weight editor-toolbar-icon" />
      <FontAwesomeIcon icon="fa-solid fa-underline" class="editor-font-weight editor-toolbar-icon" />
    </span>

    <span class="toolbar-items">
      <FontAwesomeIcon icon="fa-solid fa-align-left" class="editor-align editor-toolbar-icon" />
      <FontAwesomeIcon icon="fa-solid fa-align-center" class="editor-align editor-toolbar-icon" />
      <FontAwesomeIcon icon="fa-solid fa-align-right" class="editor-align editor-toolbar-icon" />
    </span>

    <span class="toolbar-items">
      <FontAwesomeIcon icon="fa-solid fa-link" class="editor-media editor-toolbar-icon" />
      <FontAwesomeIcon icon="fa-solid fa-image" class="editor-media editor-toolbar-icon" />
    </span>
  </div>

  <div id="editor" contentEditable="true"></div>
</template>

<script>
</script>

<style>
#editor-toolbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 7.5px;
  margin: auto;
  width: 80vw;
}


.editor-toolbar-icon {
  margin-left: 5px;
  font-size: 1.5em;
  cursor: pointer;
}

</style>