import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions'; 

const firebaseConfig = {
	crossorigin:"anonymous",
  apiKey: "AIzaSyCfZqYYLjugw9yd40K4m-cwfKo6V5Mn_8U",
  authDomain: "tik-tok-clone-e35eb.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-e35eb.firebaseio.com",
  projectId: "tik-tok-clone-e35eb",
  storageBucket: "tik-tok-clone-e35eb.appspot.com",
  messagingSenderId: "747893012215",
  appId: "1:747893012215:web:705e0795a3676c687cc5f2",
  measurementId: "G-2S87QHGFEB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
