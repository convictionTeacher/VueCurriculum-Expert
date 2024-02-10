<script setup>
// こちらからスクリプトを記述してください
// import ChildComponent from './components/ChildComponent.vue';
import { ref, computed } from 'vue'

const price = ref(0);
const tax = 1.1

const addTax = computed(() => {
  return Math.floor(price.value * tax);
})

</script>
<template>
  <div class="lesson3_div">
    <!-- こちらからテンプレートを記述してください -->
    <input type="number" v-model="price" class="lesson3_input">
    <p class="lesson3_p">税込：{{ addTax }}</p>
    <p class="lesson3_p">税別：{{ price }}</p>
  </div>
</template>
<style>
  .lesson3_div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .lesson3_input {
    font-size: 16px;
    padding: .5em;
  }

  .lesson3_p {
    margin: 0;
    font-size: 16px;
    color: #333;
  }
</style>