<script setup lang="ts">
// Import
import { ref } from 'vue'

// Import Component
import Block from '@/components/Block.vue'
import Result from '@/components/Result.vue'

// Variable
const isStart = ref(false)
const showScore = ref(false)
const score = ref(0)
let delay: number | undefined

// Function
const handleStart = () => {
  delay = 2000 + Math.random() * 5000
  isStart.value = true
  showScore.value = false
}

const endGame = (reactionTime: number) => {
  score.value = reactionTime
  isStart.value = false
  showScore.value = true
}
</script>

<template>
  <main>
    <div class="wrap-content">
      <h2 class="titleView">Build Reaction Game</h2>
      <button class="buttonPlay" @click="handleStart" :disabled="isStart">Play</button>

      <Block v-if="isStart" v-model:isStart="isStart" v-bind:delay="delay" @end="endGame" />
      <Result v-if="showScore" v-bind:score="score" />
    </div>
  </main>
</template>

<style scoped>
.wrap-content {
  text-align: center;
  color: #444;
  margin-top: 20px;
}

button {
  background: #1e293b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
