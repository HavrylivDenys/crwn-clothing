import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDndWmq94b0N6I6pICkbHHIcaZWAIer2cU",
    authDomain: "crwn-chothing.firebaseapp.com",
    databaseURL: "https://crwn-chothing.firebaseio.com",
    projectId: "crwn-chothing",
    storageBucket: "crwn-chothing.appspot.com",
    messagingSenderId: "30152512403",
    appId: "1:30152512403:web:c81a78560e5ed9edb08e66",
    measurementId: "G-05XZLZXEQV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;