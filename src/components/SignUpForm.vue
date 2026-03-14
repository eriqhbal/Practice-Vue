<script setup lang="ts">
// Import
import { ref } from 'vue'

// Variable
const email = ref('')
const password = ref('')
const role = ref('')
const checkboxData = ref(false)
const tempSkill = ref('')
const errorMessage = ref('')
const skills = ref<string[]>([])

// Function Logic"
const handleSubmit = () => {
  errorMessage.value =
    password.value.length < 5 ? 'huruf password tidak boleh kurang atau sama dengan 5 karakter' : ''

  if (!errorMessage.value) {
    console.log('Your Login is Success!')
  }
}

const addSkill = (e: any) => {
  if (e.key === ',' && tempSkill.value && !skills.value.includes(tempSkill.value)) {
    skills.value.push(tempSkill.value.trim())
    tempSkill.value = ''
  }
}

const deleteSkill = (skill: string) => {
  skills.value = skills.value.filter((data) => {
    return data !== skill
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="">Email:</label>
    <input type="email" v-model="email" required />

    <label for="">Password</label>
    <input type="password" v-model:="password" required />
    <p class="errorMess">{{ errorMessage }}</p>

    <label for="">Select Role </label>
    <select v-model="role">
      <option value="web developer">Web Developer</option>
      <option value="web designer">Web Designer</option>
    </select>

    <label for="">Skills</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div v-for="(skill, index) in skills" :key="index" class="pill" @click="deleteSkill(skill)">
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" v-model="checkboxData" />
      <label>Accept Terms & Condition</label>
    </div>

    <div class="submit">
      <button @click="handleSubmit" type="submit">Create an Account</button>
    </div>
  </form>

  <div class="informationtext">
    <p>Your Email is {{ email }}</p>
    <p>Your Password is {{ password }}</p>
    <p>your Role {{ skills }}</p>
  </div>
</template>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.submit {
  text-align: center;
}

.errorMess {
  text-align: center;
  color: red;
}

.informationtext {
  text-align: center;
}
</style>
