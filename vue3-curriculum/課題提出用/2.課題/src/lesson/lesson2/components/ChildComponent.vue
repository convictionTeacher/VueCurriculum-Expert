<script setup>
// こちらからスクリプトを記述してください
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
const text = ref('')

onMounted(() => {
    console.log('onMounted')
})

onUpdated(() => {
    console.log('onUpdated: ' + text.value)
})

onUnmounted(() => {
    console.log('onUnmounted')
})
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