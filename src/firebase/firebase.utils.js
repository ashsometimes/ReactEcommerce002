import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyALjpab6BSgv08V874EfVzwxfZWJuXdp14",
    authDomain: "shopahlicity-db.firebaseapp.com",
    databaseURL: "https://shopahlicity-db.firebaseio.com",
    projectId: "shopahlicity-db",
    storageBucket: "shopahlicity-db.appspot.com",
    messagingSenderId: "1055740429042",
    appId: "1:1055740429042:web:9c4bb076c9929c5eed066b",
    measurementId: "G-T95JWZKDD7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;