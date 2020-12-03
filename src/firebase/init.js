import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCfP5H7L-BisefW-014k1CvVrppcW59jNk",
  authDomain: "pampera-1b7c0.firebaseapp.com",
  databaseURL: "https://pampera-1b7c0.firebaseio.com",
  projectId: "pampera-1b7c0",
  storageBucket: "pampera-1b7c0.appspot.com",
  messagingSenderId: "678210306218",
  appId: "1:678210306218:web:27f69fab16a2f8343e50d3",
  measurementId: "G-P1B73N0TFF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();