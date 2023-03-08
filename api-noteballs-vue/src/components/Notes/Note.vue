<template>
    <div 
     class="card mb-4">
      <!-- <header class="card-header">
        <p class="card-header-title">Título 1</p>
        <button class="card-header-icon" aria-label="more options">S
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header> -->
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Editar</a>
        <a href="#" class="card-footer-item">Deletar</a>
      </footer>
    </div>
</template>

<script setup>
const props = defineProps({
    note: {
        type: Object,
        required: true,
    }
})
</script>