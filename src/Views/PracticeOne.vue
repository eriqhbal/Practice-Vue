<script setup lang="ts">
// Import
import { ref } from 'vue'

// Variable
const nameInput = ref('')
const textName = ref('')

// Handle Function
const getName = () => {
  nameInput.value = textName.value
}
</script>

<template>
  <main>
    <div class="container">
      <input v-model="textName" />
      <button @click="getName">Click!</button>

      <p>Jadi nama dia adalah {{ nameInput }}</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f6fb;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 350px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 15px;
}

h2 {
  text-align: center;
  margin: 0 0 10px 0;
  color: #1f2937;
}

input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
}

input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}

button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #2563eb;
}

.result {
  margin-top: 5px;
  font-size: 14px;
  color: #374151;
}
</style>
