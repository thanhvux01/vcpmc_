import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { CollectionReference, DocumentData, collection, getFirestore } from "firebase/firestore";
import { User } from "./type/user";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCklEkE_3sUHcfHYRIF9mwMXS5VBH4IqU",
  authDomain: "premium-apex-349213.firebaseapp.com",
  databaseURL: "https://premium-apex-349213-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "premium-apex-349213",
  storageBucket: "premium-apex-349213.appspot.com",
  messagingSenderId: "239802001371",
  appId: "1:239802001371:web:c69e619bf22a9f77cb69fe",
  measurementId: "G-BNJSFM82X3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const firestore = getFirestore();
export const db = getFirestore(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>
}

export const usersCol = createCollection<User>('users')
