<script setup lang="ts">
// Import
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

// Variable
const showBlock = ref(false)
let timer: number | undefined = undefined
const reactionTimer = ref(0)

// Props
const props = defineProps({
  delay: Number,
  isStart: Boolean,
})

const emit = defineEmits(['update:isStart', 'end'])

// LifeCycle Hook
onMounted(() => {
  console.log('mounted')
  setTimeout(() => {
    showBlock.value = true
    startTimer()
  }, props.delay)
})

onUpdated(() => {
  console.log('onUpdated ya!')
})

onUnmounted(() => {
  console.log('onMounted')
})

// Function
const handleReset = () => {
  showBlock.value = !showBlock.value
  emit('update:isStart', false)
}

const startTimer = () => {
  timer = setInterval(() => {
    reactionTimer.value += 10
  }, 10)
}

const stopTimer = () => {
  if (timer !== undefined) {
    clearInterval(timer)
    emit('end', reactionTimer.value)
  }
  timer = undefined
}
</script>

<template>
  <div v-if="showBlock" class="block" @click.self="stopTimer">Click Me</div>
</template>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
