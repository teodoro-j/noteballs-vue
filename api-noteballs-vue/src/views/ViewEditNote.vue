<template>
  <div class="edit-note"></div>
  <!-- <h1>Editar Note com o id: {{ $route.params.id }}</h1> -->
  <AddEditNote 
   v-model="noteContent"
   ref="addEditNoteRef"
   label="Editar Label"
   bgColor="link">
    <template #buttons>
        <button 
       @click="$router.push('/')" 
       class="button is-link has-background-white has-text-link-dark mr-4"
       >
        Cancelar
      </button>
      <button 
       @click="handleSaveClicked" 
       class="button is-link has-background-link-dark"
       :disabled="!noteContent">
        Salvar
      </button>

    </template>
  </AddEditNote>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '../stores/storeNotes';
import AddEditNote from '../components/Notes/AddEditNote.vue';

const route = useRoute();
const router = useRouter();


const noteContent = ref('')

const storeNotes = useStoreNotes();

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent);
    router.push('/')
}

</script>