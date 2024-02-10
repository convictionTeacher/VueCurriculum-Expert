<script setup>
  // lesson1
  import Lesson1 from './lesson/lesson1/Lesson1.vue'

  // lesson2
  import Lesson2 from './lesson/lesson2/Lesson2.vue'

  // lesson3
  import Lesson3 from './lesson/lesson3/Lesson3.vue'

  // lesson4
  import Lesson4 from './lesson/lesson4/Lesson4.vue'

  // lesson5
  import Lesson5 from './lesson/lesson5/Lesson5.vue'

</script>
<template>
  <div class="lesson_container">
    <p class="lesson_title">lesson1</p>
    <Lesson1/>
  </div>
  <hr/>
  <div class="lesson_container">
    <p class="lesson_title">lesson2</p>
    <Lesson2/>
  </div>
  <hr/>
  <div class="lesson_container">
    <p class="lesson_title">lesson3</p>
    <Lesson3/>
  </div>
  <hr/>
  <div class="lesson_container">
    <p class="lesson_title">lesson4</p>
    <Lesson4/>
  </div>
  <hr/>
  <div class="lesson_container">
    <p class="lesson_title">lesson5</p>
    <Lesson5/>
  </div>
</template>
<style>
  .lesson_container {
    padding: 16px 32px;
  }

  .lesson_title {
    margin: 0;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #0f2350;
  }
</style>