<script setup lang="ts">
// Define Emit
const emit = defineEmits(['theClose'])

// Function
const handleModal = () => {
  emit('theClose')
}
</script>

<template>
  <div class="backdrop" @click.self="handleModal">
    <div class="modal">
      <div class="content">
        <slot>Default Slot</slot>
      </div>

      <div class="actions">
        <slot name="linkAja"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Sedikit lebih gelap */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  width: 400px;
  padding: 20px;
  margin: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.content {
  margin-bottom: 20px;
  color: #333;
  line-height: 1.6;
}

.actions {
  border-top: 1px solid #eee;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

:deep(.actions a) {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid #42b883;
  border-radius: 4px;
  transition: 0.3s;
}

:deep(.actions a:hover) {
  background: #42b883;
  color: white;
}
</style>
