import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "...",
  authDomain: "project-app-eabe4.firebaseapp.com",
  databaseURL: "https://project-app-eabe4.firebaseio.com",
  projectId: "project-app-eabe4",
  storageBucket: "project-app-eabe4.appspot.com",
  messagingSenderId: "646936606926"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
