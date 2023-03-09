import { defineStore } from 'pinia';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../js/firebase';

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                // {
                //     id: 'id1',
                //     content: 'This is the first note!'
                // }
            ]
        }
    },
    actions: {
        async getNotes() {
            const querySnapshot = await getDocs(collection(db, "notes"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                let note = {
                    id: doc.id,
                    content: doc.data().content,
                }
                this.notes.push(note)
            });
        },
        addNote(newNoteContent) {
            let atualDate = new Date().getTime();
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