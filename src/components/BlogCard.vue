<template>
  <div class="blog-card">
    <h3>{{ post.title }}</h3>
    <p>created at</p>
    <p>{{ post.desc }}</p>
    <p>{{ post.tags }}</p>
    <router-link :to="'/post/' + id" class="blog-card-link">
      <img class="blog-card-image" src="../assets/logo.png" alt="Blog picture" />
    </router-link>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  post: Object,
  id: Number
})
</script>

<style lang="scss">
.blog-card {
  $width: 300px;
  $height: 400px;
  @include flex-col($gap: 0rem);

  padding: $width * 0.05 $height * 0.05;
  width: $width;
  height: $height;
  background-color: $dominant;
  color: $text-dark;
  border: 1px solid $complement;
  text-align: left;

  &:hover {
    /* box-shadow: 0px 2px 5px 1px $accent; */
    background-color: $complement;
    color: $text-light;
    transition: $default-transition;
  }
}


.blog-card-link,
.blog-card-image {
  width: 100%;
}

.blog-card-image {
  height: 200px;
  object-fit: contain;
}
</style>