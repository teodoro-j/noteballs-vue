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
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '../components/Notes/Note.vue';

const newNote = ref('');
const newNoteRef = ref(null);
const notes = ref([
    {
        id: 'id1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctoet, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.'
    },
    {
        id: 'id2',
        content: 'Esta nota é menor! Yup!'
    }
]);

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
</script>