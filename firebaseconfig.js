import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCStSUzhdVB4dXwYFQx_qpVbZO9ODrNv8k",
  authDomain: "supply-chain-project-b6ff5.firebaseapp.com",
  projectId: "supply-chain-project-b6ff5",
  storageBucket: "supply-chain-project-b6ff5.appspot.com",
  messagingSenderId: "407754470776",
  appId: "1:407754470776:web:25fa521b2f74deda06048d",
  measurementId: "G-TWQNLJZ0RD"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);


export { app, auth, firestore, storage,database };

// import firebase from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyDDEguvQ-zLVmUSmKXDcc4Qs7G9Id1hsIM",
//   authDomain: "smarttelescope.firebaseapp.com",
//   databaseURL: "https://smarttelescope-default-rtdb.firebaseio.com",
//   projectId: "smarttelescope",
//   storageBucket: "smarttelescope.appspot.com",
//   messagingSenderId: "193247300076",
//   appId: "1:193247300076:web:585be986a4466a88f698c9",
//   measurementId: "G-GKHFRHZTJ7"
// };
// firebase.initializeApp(firebaseConfig);

// export default firebase;