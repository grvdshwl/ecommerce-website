import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

    const config = {
    apiKey: "AIzaSyBQLOWunzTlzYd57MRIQ3TlhZXLSpTmG0g",
    authDomain: "crwn-db-37209.firebaseapp.com",
    projectId: "crwn-db-37209",
    storageBucket: "crwn-db-37209.appspot.com",
    messagingSenderId: "542793911057",
    appId: "1:542793911057:web:0781ffa3ed43171b3fdab0",
    measurementId: "G-Q9WXMTSZYD"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{

      await userRef.set({
        displayName,email,createdAt,...additionalData
      })

    }catch (error){

      console.log("error creating user", error.message );

    }

  }

  return userRef;

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;