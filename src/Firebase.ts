import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

console.log(process.env.REACT_APP_API_KEY)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);

export { firebase };

interface IFirebaseContext {
  userId: string | null;
  userName: string;
}

export const FirebaseContext = React.createContext<IFirebaseContext>({
  userId: null,
  userName: ""
});
