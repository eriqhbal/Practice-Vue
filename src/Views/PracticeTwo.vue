<script setup lang="ts">
// Import Original
import { ref } from 'vue'

const quote = ref('First solve the problem, then write a code')
const writerName = ref('Zuleriqhbal Hendri')
const linkTujuan = ref('https://getemoji.com/')

linkTujuan.value = 'https://vuejs.org/guide/introduction.html'

writerName.value = 'Hendri Zuleriqhbal'
</script>

<template>
  <main>
    <section>
      <p>{{ quote }}</p>
      <span class="jarak">{{ writerName }}</span>
      <a v-bind:href="linkTujuan">Professor Link</a>
    </section>
    <button>Another !</button>
  </main>
</template>

<style scoped>
.jarak {
  margin-right: 4px;
}
</style>
