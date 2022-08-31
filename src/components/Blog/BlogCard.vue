<template>
  <div class="blog-card">
    <router-link :to="'/post/' + this.$.vnode.key">
      <img src="../../assets/logo.png" alt="Blog picture" />
    </router-link>
    <h3>{{  title  }}</h3>
    <p>{{  desc  }}</p>
    <p>{{  tags  }}</p>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  desc: String,
  tags: String
})
</script>

<style>
.blog-card {
  width: var(--card-width);
  height: var(--card-height);
  background-color: var(--dominant);
  color: var(--complement);
}

.blog-card:hover {
  /* box-shadow: 0px 2px 5px 1px var(--accent); */
  background-color: var(--complement);
  color: var(--dominant);
  transition: all 0.5s ease;
}
</style>