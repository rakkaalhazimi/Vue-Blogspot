<template>
  <form id="search-bar">
    <input
      type="text" 
      placeholder="Search Post" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <button type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
  
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(["modelValue"])
defineEmits(["update:modelValue"])
</script>