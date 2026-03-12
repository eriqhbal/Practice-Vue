<script setup lang="ts">
// Import Original
import { ref } from 'vue'

const quote = ref('First solve the problem, then write a code')
const writerName = ref('Zuleriqhbal Hendri')
const linkTujuan = ref('https://getemoji.com/')
const isShow = ref(true)
const ages = ref(1)

linkTujuan.value = 'https://vuejs.org/guide/introduction.html'

const handleChangeName = (variableName: string) => {
  writerName.value = variableName
}

const handleShow = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <main>
    <section>
      <p>{{ quote }}</p>
      <span class="jarak">{{ writerName }}</span>
      <p>your age is {{ ages }}</p>
    </section>
    <button v-on:click="ages++">Increase Number</button>
    <button v-on:click="ages--">Decrease Number</button>
    <div @click="handleChangeName('oath')">Press This Button</div>
    <button @click="handleShow">Toggle Container</button>

    <div>
      <p v-if="isShow">This Page will show if the container is true</p>
      <p v-else>This Page Will not Showing!</p>
    </div>
  </main>
</template>

<style scoped>
.jarak {
  margin-right: 4px;
}
</style>
