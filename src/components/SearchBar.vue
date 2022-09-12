<template>
  <div id="search-bar">
    <input type="text" placeholder="Search Post" v-model="postStore.keywords">
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>

</template>

<script setup>
import { usePostStore } from "../stores/post";

const postStore = usePostStore()
</script>

<style lang="scss">
#search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 1rem;
  padding: 0.8rem;
  width: 60vw;
  background-color: $complement;
  border-radius: 20px;
}

#search-bar input {
  width: 100%;
  background: transparent;
}

#search-bar button {
  font-size: $icon-size;
  background: transparent;

}
</style>