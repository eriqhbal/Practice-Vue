<script setup lang="ts">
// Props
defineProps({
  delay: Number,
})
</script>

<template>
  <div class="block">Click Me</div>
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
