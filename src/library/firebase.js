import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq9WMfI3E8u9FuP4PI0666wWE61kl-lUY",
  authDomain: "chat-app-5a6d2.firebaseapp.com",
  databaseURL: "https://chat-app-5a6d2.firebaseio.com",
  projectId: "chat-app-5a6d2",
  storageBucket: "chat-app-5a6d2.appspot.com",
  messagingSenderId: "441381505245",
  appId: "1:441381505245:web:6bef42ec64d28e21103334",
  measurementId: "G-8B6F6ESB79",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.database();

export default firebase;
