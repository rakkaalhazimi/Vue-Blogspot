<template>
  <div class="blog-card">
    <div class="blog-card-header">
      <h3 class="blog-card-title">{{ post.title }}</h3>
      <p class="blog-card-created">created at 20-02-2022</p>
      <p class="blog-card-tag">{{ post.tags }}</p>
    </div>

    <div class="blog-card-body">
      <router-link :to="'/post/' + id" class="blog-card-link">
        <img class="blog-card-image" src="../assets/logo.png" alt="Blog picture" />
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
  @include flex-col($justify: space-between, $gap: 1rem);
  @include card(100%, $blog-card-height);

  .blog-card-title {
    transition: $default-transition;
  }

  &:hover {
    border: 1px solid $accent;

    .blog-card-title {
      color: $accent;
    }
  }
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

.blog-card-link,
.blog-card-image {
  width: 100%;
  height: 100%;
}

.blog-card-image {
  object-fit: contain;
}
</style>