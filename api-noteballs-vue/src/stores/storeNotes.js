import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [
            {
                id: 'id1',
                content: 'This is the first note!'
            }
        ] 
    }
  },
  actions: {
    addNote(newNoteContent) {
        let atualDate= new Date().getTime( );
        let id = atualDate.toString();
    
        let note = {
            id,
            content: newNoteContent
        }
        
        this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
        this.notes = this.notes.filter(note => {
            return note.id !== idToDelete
        })
    }
  },
})