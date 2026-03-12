<script setup lang="ts">
import { ref } from 'vue'
const x = ref(0)
const y = ref(0)

const handleEvent = (eventt: any = {}, data: number = 4) => {
  console.log('Event is Working!')
  console.log('The data is', eventt, data)
}

const handleMouseMove = (e: any) => {
  x.value = e.clientX
  y.value = e.clientY
}
</script>

<template>
  <main>
    <h2>Event Handler</h2>
    <div class="container-box">
      <div class="box" @mouseover="handleEvent">Mouseover (enter)</div>
      <div class="box" @mouseleave="handleEvent($event, 5)">Mouseleave</div>
      <div class="box" @dblclick="handleEvent">Double Click</div>
      <div class="box" @mousemove="handleMouseMove($event)">
        Mouse Move - nilai X:{{ x }} nilai Y:{{ y }}
      </div>
    </div>
  </main>
</template>

<style>
.container-box {
  display: grid;
  grid-template-columns: repeat(2, 400px);
  justify-content: center;
  align-content: center;
  gap: 20px;
  min-height: 100vh;
}
.box {
  padding: 100px 0;
  width: 400px;
  text-align: center;
  background: #ddd;
  display: inline-block;
}
</style>
