<template>
  <form>
    <input 
      type="text" 
      placeholder="Enter keywords" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <!-- <ButtonSearchBar></ButtonSearchBar> -->
  </form>
  
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(["modelValue"])
defineEmits(["update:modelValue"])

// import ButtonSearchBar from './ButtonSearchBar.vue';
</script>