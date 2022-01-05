import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, where, query } from 'firebase/firestore'
import { QUIZES_COLL } from "../res/CollectionNames";

const firebaseConfig = {
  apiKey: "AIzaSyA6WDAV55dJioU8Fd4RFRq-g3pKLAUA9t0",
  authDomain: "sunday-5fbb2.firebaseapp.com",
  projectId: "sunday-5fbb2",
  storageBucket: "sunday-5fbb2.appspot.com",
  messagingSenderId: "710629797708",
  appId: "1:710629797708:web:672ae81bd0cd3e2ae4e9e9",
  measurementId: "G-253C0M6WJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const getItems = async ({ collectionName }) => {
  const collectionRef = collection(db, collectionName)
  const res = await getDocs(collectionRef)
  const mapedRes = res.docs.map((doc) =>({
    ...doc.data()
  }))
  return mapedRes
}

export const getQuizById = async ({ id }) => {
  const ref = query(collection(db, QUIZES_COLL), where('id', '==', id))
  const res = await getDocs(ref)
  return res.docs[0].data()
}


export const addItem = async ({ collectionName, item }) => {
  const collectionRef = collection(db, collectionName)
  await addDoc(collectionRef, item)
}