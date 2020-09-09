import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5mzuA3S0vYk2SQUAUeXSnJ1Whdih8lzs",
  authDomain: "movenu-web.firebaseapp.com",
  databaseURL: "https://movenu-web.firebaseio.com",
  projectId: "movenu-web",
  storageBucket: "movenu-web.appspot.com",
  messagingSenderId: "812274150501",
  appId: "1:812274150501:web:852792db8c40f46a932a8c",
  measurementId: "G-BJ6Q4DRYCZ",
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, metadata } = user;
  /* const {creationTime} = metadata  */
  return {
    name: displayName,
    email: email,
    avatar: photoURL,
    createdAt: metadata.creationTime,
    /* createdAt: creationTime,  */
  };
};
/* guardamos los datos */
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    const normalizerUser = user ? mapUserFromFirebaseAuthToUser(user): null
    onChange(normalizerUser);
  });
};
// conectamos con el firebase
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};
