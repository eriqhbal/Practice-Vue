<script setup lang="ts">
import { ref } from 'vue'

const isShowList = ref(true)
const urlLink = 'https://netninja.dev/'

const handleIsShowList = () => {
  isShowList.value = !isShowList.value
}

const books = [
  {
    title: 'The Roses of Night',
    author: 'Hendri',
    img: new URL('../assets/images/cover1.jpeg', import.meta.url).href,
    isFav: true,
  },
  {
    title: 'Love Needs Roses',
    author: 'Zul',
    img: new URL('../assets/images/cover2.jpeg', import.meta.url).href,
    isFav: true,
  },
  {
    title: 'Blossoms & stanzas',
    author: 'Zuleriqhbal',
    img: new URL('../assets/images/cover3.jpeg', import.meta.url).href,
    isFav: false,
  },
]
</script>

<template>
  <main class="wrapper">
    <div class="container-box">
      <h2 class="title">List Books</h2>

      <!-- Attribute Binding -->
      <a v-bind:href="urlLink">The best Website ever</a>

      <div v-show="isShowList" class="listBook">
        <ul>
          <li v-for="book in books" :key="book.title">
            <img v-bind:src="book.img" alt="" />
            <span class="author">{{ book.author }}</span>
            <span class="book-title">{{ book.title }}</span>
          </li>
        </ul>
      </div>

      <div class="button">
        <button v-show="isShowList" @click="handleIsShowList">Hide List</button>

        <button v-show="!isShowList" @click="handleIsShowList">Show List</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f7fb;
  font-family: Arial, Helvetica, sans-serif;
}

.container-box {
  width: 420px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  text-align: center;
  margin: 0;
  color: #1f2937;
}

.listBook {
  width: 100%;
}

.listBook ul {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: horizontal;
  gap: 10px;
}

.listBook li {
  width: 110px;
  padding: 10px;
  background: #f8fafc;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  transition: all 0.25s ease;
}

.listBook img {
  width: 70px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 6px;
}

.listBook li:hover {
  background: #eef2ff;
  transform: translateY(-2px);
}

.author {
  font-size: 12px;
  color: #6b7280;
}

.book-title {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
}

.button {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}

button:hover {
  background: #2563eb;
}
</style>
