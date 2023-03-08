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
     v-for='note in notes'
     :key='note.id'
     :note="note"
     @deleteClicked="deletarNota"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '../components/Notes/Note.vue';

const newNote = ref('');
const newNoteRef = ref(null);
const notes = ref([]);

const addNote = () => {
    let atualDate= new Date().getTime( );
    let id = atualDate.toString();

    let note = {
        id,
        content: newNote.value
    }

    notes.value.unshift(note);
    newNote.value = '';
    newNoteRef.value.focus();
}

const deletarNota = idToDelete => {
    notes.value = notes.value.filter(note => {
        return note.id !== idToDelete
    })
}
</script>