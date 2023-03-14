import { defineStore } from 'pinia';
import { auth } from '../js/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email;
                    this.router.push('/')
                } else {
                    this.user = {};
                    this.router.replace('/auth')
              }
            })
        },
        registerUser(credentials) {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
                const user = userCredential.user;
            }).catch((error) => {
                console.log('error.message', error.message)
            });
        },
        loginUser(credentials) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
                    const user = userCredential.user;
                    console.log('user: ', user)
                }).catch((error) => {
                    console.log('error.message', error.message)
                });
        },
        logoutUser() {
            signOut(auth).then(() => {
                console.log('saindo');
            }).catch((error) => {
                console.log(error.message)
            });
        }
    },
    persist: true,
})