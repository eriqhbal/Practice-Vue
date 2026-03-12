<script setup lang="ts">
import { ref } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const menuGroups = [
  {
    title: 'Main',
    items: [{ name: 'Dashboard', icon: '🏠', route: '/' }],
  },
  {
    title: 'Menu',
    items: [
      { name: 'Akta', icon: '📄', route: '/akta' },
      { name: 'Client', icon: '👤', route: '/client' },
      { name: 'Dokumen', icon: '🍉', route: '/practice-one' },
      { name: 'ReactivityComponent', icon: '🏯', route: '/practice-two' },
    ],
  },
  {
    title: 'Transaksi',
    items: [
      { name: 'Pembuatan Akta', icon: '📃', route: '/create-akta' },
      { name: 'Legalitas', icon: '🪧', route: '/create-legality' },
    ],
  },
  {
    title: 'The Net Ninja Course',
    items: [{ name: 'Event Handler', icon: '🖕🏻', route: '/event-handler' }],
  },
  {
    title: 'Admin',
    items: [
      { name: 'Pengguna', icon: '🧑🏾‍💼', route: '/users' },
      { name: 'Peran', icon: '🎯', route: '/roles' },
      { name: 'Pengaturan', icon: '💼', route: '/settings' },
    ],
  },
]
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside :class="['sidebar', { close: !isSidebarOpen }]">
      <button class="toggle-btn" @click="toggleSidebar">☰</button>

      <div class="menu">
        <div v-for="group in menuGroups" :key="group.title" class="menu-group">
          <p v-if="isSidebarOpen" class="group-title">
            {{ group.title }}
          </p>

          <ul>
            <li v-for="item in group.items" :key="item.name">
              <RouterLink :to="item.route" class="menu-item">
                <span class="icon">{{ item.icon }}</span>
                <span v-if="isSidebarOpen">{{ item.name }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
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
/* LAYOUT */

.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* SIDEBAR */

.sidebar {
  width: 250px;
  background: #1e293b;
  color: white;
  transition: width 0.3s;
  padding: 20px;

  display: flex;
  flex-direction: column;

  height: 100vh;
}

.sidebar.close {
  width: 70px;
}

/* TOGGLE BUTTON */

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
}

/* MENU AREA (SCROLLABLE) */

.menu {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;
}

/* SCROLLBAR */

.menu::-webkit-scrollbar {
  width: 6px;
}

.menu::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 10px;
}

/* MENU GROUP */

.menu-group {
  margin-bottom: 20px;
}

.menu-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* GROUP TITLE */

.group-title {
  font-size: 11px;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

/* MENU ITEM */

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;
  border-radius: 6px;

  color: white;
  text-decoration: none;
  transition: background 0.2s;
}

/* ketika sidebar kecil */

.sidebar.close .menu-item {
  justify-content: center;
  padding: 12px 0;
}

.sidebar.close .icon {
  margin: 0 auto;
}

.menu-item:hover {
  background: #334155;
  color: #38bdf8;
}

/* ICON */

.icon {
  font-size: 18px;
}

/* RIGHT SIDE PAGE */

.page {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* CONTENT */

.content {
  flex: 1;
  padding: 30px;
  background: #f1f5f9;
  overflow-y: auto;
}
</style>
