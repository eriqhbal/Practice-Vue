<script setup lang="ts">
import axios from 'axios'
import { onMounted, onUnmounted, ref, watch } from 'vue'

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  role: string
  company: { name: string; title: string }
  address: { city: string }
}

// State
const people = ref<User[]>([])
const isLoading = ref(true)
const errorMsg = ref('')

// Watcher: Memantau perubahan jumlah data
watch(people, (newVal) => {
  console.log(`Update: Sekarang ada ${newVal.length} data user di memori.`)
})

// Function Fetch Data
const fetchUsers = async () => {
  isLoading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = await axios.get('https://dummyjson.com/users')
    people.value = response.data.users
  } catch (e) {
    errorMsg.value = 'Gagal memuat data. Coba lagi nanti.'
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchUsers()
})

onUnmounted(() => {
  // Membersihkan data saat komponen dihancurkan
  people.value = []
  console.log('Komponen ditutup, memori dibersihkan.')
})
</script>

<template>
  <main class="container">
    <div class="header">
      <h2>User Directory</h2>
      <button @click="fetchUsers" :disabled="isLoading" class="btn-refresh">
        {{ isLoading ? 'Refreshing...' : 'Refresh Data' }}
      </button>
    </div>

    <div v-if="errorMsg" class="error-banner">
      {{ errorMsg }}
    </div>

    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Sedang mengambil data...</p>
    </div>

    <div v-else class="table-container">
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Location</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in people" :key="user.id">
            <td class="user-info">
              <img :src="user.image" alt="avatar" class="avatar" />
              <span class="name">{{ user.firstName }} {{ user.lastName }}</span>
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.city }}</td>
            <td>
              <div class="company-name">{{ user.company.name }}</div>
              <small class="title">{{ user.company.title }}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 2rem;
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

/* Loading Spinner */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  color: #666;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Button & Table */
.btn-refresh {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-refresh:disabled {
  background-color: #bdc3c7;
}

.table-container {
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}
th,
td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
}
th {
  background: #f8f9fa;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.error-banner {
  background-color: #fee2e2;
  color: #dc2626;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
