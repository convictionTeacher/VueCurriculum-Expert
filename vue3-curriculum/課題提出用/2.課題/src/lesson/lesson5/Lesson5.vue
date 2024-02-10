<script setup>
// こちらからスクリプトを記述してください
import ChildComponent from './components/ChildComponent.vue';

const parentEmit = (emitValue) => {
  console.log(emitValue)
}

const parentToChild = "メッセージを出力する"
</script>

<template>
  <div class="lesson5_div">
    <ChildComponent @childToParent="parentEmit" :parentToChild="parentToChild" />
  </div>
</template>
<style>
  .lesson5_div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>