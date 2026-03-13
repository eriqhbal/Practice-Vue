<script setup lang="ts">
// Import
import { ref } from 'vue'
import PropertyTest from '@/components/PropertyTest.vue'
import ModalPractice from '@/components/ModalPractice.vue'

// Variable
const nameInput = ref('')
const textName = ref('')
const isShowTheModal = ref(false)

// Handle Function
const getName = () => {
  nameInput.value = textName.value
}

const handleChangeShowModal = () => {
  isShowTheModal.value = !isShowTheModal.value
}
</script>

<template>
  <main>
    <div class="container">
      <input v-model="textName" />
      <button @click="getName">Click!</button>

      <p>Jadi nama dia adalah {{ nameInput }}</p>
      <PropertyTest v-bind:textName="'Eriqhbal'" :age="49" />

      <!-- Test Another Modal using emit, slot and custom -->
      <div v-if="isShowTheModal">
        <ModalPractice @theClose="handleChangeShowModal">
          <template #linkAja>
            <a href="#">Sign Up</a>
            <a href="#">Sign In</a>
          </template>
          <p>Just Practice Every Single Day</p>
          <p>Keep Discipline until you get the progress</p>
        </ModalPractice>
      </div>

      <button @click="handleChangeShowModal">Show The Modal</button>
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
