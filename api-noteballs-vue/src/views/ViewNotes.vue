<template>
  <div class="notes">

    <div class="card has-background-grey-lighter mb-5 p-4">
        <div class="field">
          <div class="control">
            <textarea 
             v-model="newNote"
             class="textarea" 
             placeholder="Nova nota" 
             ref="newNoteRef"
            >
            </textarea>
          </div>
        </div>
    
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button 
             @click="addNote"
             :disabled="!newNote"
             class="button is-link has-background-grey-dark">
              Adicionar
            </button>
          </div>
        </div>
    </div>
    <Note
     v-for='note in storeNotes.notes'
     :key='note.id'
     :note="note"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '../components/Notes/Note.vue';
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes();

const newNote = ref('');
const newNoteRef = ref(null);

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = '';
    newNoteRef.value.focus();
}
</script>