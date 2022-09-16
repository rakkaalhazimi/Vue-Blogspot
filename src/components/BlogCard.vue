<template>
  <div class="blog-card">
    <div class="blog-card-header">
      <h3 class="blog-card-title">{{ post.title }}</h3>
      <p class="blog-card-created">created at 20-02-2022</p>
      <p class="blog-card-tag">{{ post.tags }}</p>
    </div>

    <div class="blog-card-body">
      <router-link :to="'/post/' + id" class="blog-card-link">
        <img class="blog-card-image" src="../assets/unsplash-small.jpg" alt="Blog picture" />
      </router-link>
    </div>

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
  @include flex-col($justify: space-between, $gap: 0);
  @include card(100%, 100%);
  align-items: flex-start;
}

.blog-card-header {
  width: 100%;
}

.blog-card-tag {
  display: inline-block;
  margin-top: .2rem;
  padding: .2rem;
  font-size: 0.7rem;
  color: $complement;
}

.blog-card-created {
  font-size: 0.8rem;
  color: $text-dim;
}

.blog-card-body {
  overflow: hidden;
  text-align: center;
}

.blog-card-link {
  width: 100%;
  height: 100%;
  background-color: $complement;
}

.blog-card-image {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
}
</style>