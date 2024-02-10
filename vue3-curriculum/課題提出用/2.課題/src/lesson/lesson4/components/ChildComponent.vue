<script setup>
// こちらからスクリプトを記述してください
import { ref, onMounted, onUpdated, onUnmounted, inject } from 'vue';
const message = inject('message')
console.log(message)
</script>
<template>
<!-- こちらからテンプレートを記述してください -->
    <input type="text" v-model="text" class="lesson2_input">
</template>
<style>
  .lesson2_input {
    font-size: 16px;
    padding: .5em;
  }
</style>