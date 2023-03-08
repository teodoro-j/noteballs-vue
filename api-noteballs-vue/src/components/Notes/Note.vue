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
          <div class="has-text-right has-text-grey-light mt-2">
            <small> {{ characterLength }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Editar</a>
        <a 
         @click.prevent="deletar"
         href="#" 
         class="card-footer-item"
        >
         Deletar
        </a>
      </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    note: {
        type: Object,
        required: true,
    }
})

const emit = defineEmits(['deleteClicked'])

const characterLength = computed(() => {
    let length = props.note.content.length;
    let description = length > 1 ? 'caracteres' : 'caracter';
    return `${length} ${description}`
})

const deletar = () => {
    emit('deleteClicked', props.note.id);
}
</script>