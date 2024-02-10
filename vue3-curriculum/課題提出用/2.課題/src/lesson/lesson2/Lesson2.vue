<script setup>
// こちらからスクリプトを記述してください
import ChildComponent from './components/ChildComponent.vue';
import { ref } from 'vue';

const isShow = ref(false)

const toggleComp = () => {
  isShow.value = !isShow.value;
}
</script>
<template>
  <div class="lesson2_div">
    <!-- こちらからテンプレートを記述してください -->
    <button type="button" @click="toggleComp" class="lesson2_btn">表示/非表示</button>
    <div v-if="isShow">
      <ChildComponent />
    </div>
  </div>
</template>
<style>
  .lesson2_div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .lesson2_btn {
    font-size: 16px;
    padding: .4em .6em;
    border-radius: 9999px;
    border: 1px solid #333;
  }
</style>