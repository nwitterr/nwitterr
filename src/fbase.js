import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD1hPYudSxmBGSlG-_YQjOaLPrJzdOAQ0M",
//   authDomain: "nwitter-d6d69.firebaseapp.com",
//   projectId: "nwitter-d6d69",
//   storageBucket: "nwitter-d6d69.appspot.com",
//   messagingSenderId: "308543998182",
//   appId: "1:308543998182:web:b43e3677bd83872b8b9327",
// };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();