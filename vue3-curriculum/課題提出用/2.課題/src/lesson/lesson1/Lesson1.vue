<script setup>
// こちらからスクリプトを記述してください
// import ChildComponent from './components/ChildComponent.vue';
import { ref } from 'vue';

  const message = ref('')
</script>
<template>
  <div class="lesson1_div">
    <!-- こちらからテンプレートを記述してください -->
    <input type="text" v-model="message" class="lesson1_input">
    <p class="lesson1_p">入力値：{{ message }}</p>
  </div>
</template>
<style>
  .lesson1_div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .lesson1_input {
    font-size: 16px;
    padding: .5em;
  }

  .lesson1_p {
    margin: 0;
    font-size: 16px;
    color: #333;
  }
</style>