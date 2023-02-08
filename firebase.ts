import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAP4hsKvYRp-Feto64YOJxC68UX-He3F0g",
  authDomain: "chatgpt-a2953.firebaseapp.com",
  projectId: "chatgpt-a2953",
  storageBucket: "chatgpt-a2953.appspot.com",
  messagingSenderId: "272892275565",
  appId: "1:272892275565:web:4547df30f76c541b9c8864",
  measurementId: "G-4LWF7KDJZ1"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
