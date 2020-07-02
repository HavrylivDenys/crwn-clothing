import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDndWmq94b0N6I6pICkbHHIcaZWAIer2cU",
  authDomain: "crwn-chothing.firebaseapp.com",
  databaseURL: "https://crwn-chothing.firebaseio.com",
  projectId: "crwn-chothing",
  storageBucket: "crwn-chothing.appspot.com",
  messagingSenderId: "30152512403",
  appId: "1:30152512403:web:c81a78560e5ed9edb08e66",
  measurementId: "G-05XZLZXEQV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
