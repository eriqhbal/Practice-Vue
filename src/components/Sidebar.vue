<script setup lang="ts">
import { ref } from 'vue'

import Header from './Header.vue'
import Footer from './Footer.vue'

const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside :class="['sidebar', { close: !isSidebarOpen }]">
      <button class="toggle-btn" @click="toggleSidebar">☰</button>

      <ul class="menu">
        <li>
          <span class="icon">🏠</span>
          <span v-if="isSidebarOpen">Dashboard</span>
        </li>

        <li>
          <span class="icon">📄</span>
          <span v-if="isSidebarOpen">Akta</span>
        </li>

        <li>
          <span class="icon">👤</span>
          <span v-if="isSidebarOpen">Client</span>
        </li>
      </ul>
    </aside>

    <!-- Main Area -->
    <div class="page">
      <Header />

      <main class="content">
        <RouterView />
      </main>

      <Footer />
    </div>
  </div>
</template>

<style>
.layout {
  display: flex;
  height: 100vh;
}

/* SIDEBAR */

.sidebar {
  width: 250px;
  background: #1e293b;
  color: white;
  transition: 0.3s;
  padding: 20px;
}

.sidebar.close {
  width: 70px;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
}

.menu {
  list-style: none;
}

.menu li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

/* RIGHT SIDE */

.page {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 30px;
  background: #f1f5f9;
}
</style>
