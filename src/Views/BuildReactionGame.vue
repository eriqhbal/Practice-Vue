<script setup lang="ts">
// Import
import { ref } from 'vue'

// Import Component
import Block from '@/components/Block.vue'

// Variable
const isStart = ref(false)
let delay: number | undefined

// Function
const handleStart = () => {
  delay = 2000 + Math.random() * 5000
  isStart.value = true
}
</script>

<template>
  <main>
    <div class="wrap-content">
      <h2 class="titleView">Build Reaction Game</h2>
      <button @click="handleStart" :disabled="isStart">Play</button>

      <Block v-if="isStart" v-bind:delay="delay" />
    </div>
  </main>
</template>

<style scoped>
.wrap-content {
  text-align: center;
  color: #444;
  margin-top: 20px;
}
</style>
