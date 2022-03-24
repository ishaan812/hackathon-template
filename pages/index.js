import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {firebase,auth,firestore} from '../firebase/initFirebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";




export default function Home() {
  const db = getFirestore(firebase);
  const [user,loading,error] = useAuthState(auth);
  
  
  // // To enter a entry in document
  // try {
  //       const docRef = addDoc(collection(db, "users"), {
  //         first: "Alan",
  //         middle: "Mathison",
  //         last: "Turing",
  //         born: 1912
  //       });
      
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }

  console.log("Loading",loading,"|","Current user:", user);
  return (
    <div>
      {loading ? (<p>Loading...</p>) : 
        <p>
          {user.providerId}
          <br/>
          <img src={user.photoURL} alt="Profile Photo"></img>
        </p>  
      }
    </div>
  )
} 
