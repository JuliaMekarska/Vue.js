import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8V7CwXMII0TKIEPPZLtEeQmnG8KsaXCQ",
  authDomain: "live-chat-vue-7446b.firebaseapp.com",
  projectId: "live-chat-vue-7446b",
  storageBucket: "live-chat-vue-7446b.appspot.com",
  messagingSenderId: "816101691442",
  appId: "1:816101691442:web:e01f359f2bca23fcdc2c2b",
  measurementId: "G-S1N4QYNQ2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
export default firebase.firestore();
