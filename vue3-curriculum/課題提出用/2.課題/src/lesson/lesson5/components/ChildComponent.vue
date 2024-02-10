<script setup>
// こちらからスクリプトを記述してください
const props = defineProps(["parentToChild"])
const emit = defineEmits(["childToParent"])

const childEmit = () => {
  emit('childToParent', "Hello, Vue3")
}
</script>
<template>
<!-- こちらからテンプレートを記述してください -->
    <button class="lesson5_btn" @click="childEmit">{{ props.parentToChild }}</button>
</template>
<style>
  .lesson5_btn {
    font-size: 16px;
    padding: 0.4em 0.6em;
    border-radius: 9999px;
    border: 1px solid #333;
  }
</style>