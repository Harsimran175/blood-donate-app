import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyBYaQ2DmOit-GA0FbcY1tSENP6ry2WwLpI",
  authDomain: "blood-donation-app-64302.firebaseapp.com",
  databaseURL: "https://blood-donation-app-64302.firebaseio.com",
  projectId: "blood-donation-app-64302",
  storageBucket: "blood-donation-app-64302.appspot.com",
  messagingSenderId: "929377023526",
  appId: "1:929377023526:web:67be87d200c522a2ed18e7",
  measurementId: "G-2Q3STSCGPW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase.firestore();