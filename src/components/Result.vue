<script setup lang="ts">
// Import
import { ref, onMounted } from 'vue'

const rank = ref('')

// Props
const props = defineProps({
  score: {
    type: Number,
    default: 0,
  },
})

// Lifecycle Hooks
onMounted(() => {
  if (props.score < 250) {
    rank.value = 'Ninja Fingers'
  } else if (props.score < 400) {
    rank.value = 'Rapid Reflexes'
  } else {
    rank.value = 'Snail pace...'
  }
})
</script>

<template>
  <main>
    <p>Reaction Time {{ props.score }} ms</p>
    <p>Your title is {{ rank }}</p>
  </main>
</template>

<style scoped></style>
