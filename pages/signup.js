import React,{ useState} from 'react'
import {firebase,auth} from '../firebase/initFirebase';
import { GithubAuthProvider, signInWithRedirect, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const gitprovider = new GithubAuthProvider();
const googleprovider = new GoogleAuthProvider();

const googlelogin=()=>{
    signInWithPopup(auth,googleprovider)
    .then((result)=>{
        const credential= GoogleAuthProvider.credentialFromResult(result);
        const token= credential.accessToken;
        const user = result.user;
        window.location="/";
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

const gitlogin=()=>{
    signInWithPopup(auth, gitprovider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        window.location="/";
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    });
}

const emaillogin=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location="/";
        // ...
    })
    .catch((error) => {
        alert("Error signing up");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}




export default function Signup() {
    const [EmailID,SetEmailID]=useState('');
    const [Password,SetPassword]=useState('');



    return (
        <div className="flex-col justify-center items-center">
            <div className="px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
                <h1 className="font-bold" >Login</h1>
                <p>Please sign-in:</p>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" >
                    EmailID
                    </label>
                    <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-grey-darker" id="EmailID" value={EmailID} type="text" placeholder="EmailID"  onChange={event=>SetEmailID(event.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" >
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-50 py-2 px-3 text-grey-darker mb-3" id="password" value={Password} type="password" placeholder="Password" onChange={event=>SetPassword(event.target.value)}  />
                    <p className="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue font-bold py-2 px-4 rounded hover:bg-blue-700 bg-blue-300" type="button" onClick={()=>{emaillogin(EmailID,Password)}}>
                    Sign In
                    </button>
                </div>
                <button className="font-bold rounded-full bg-blue-300 hover:bg-blue-700  py-5 px-20 my-5" 
                    onClick={()=>{gitlogin();}}>Github Auth</button> 
                <button className="font-bold rounded-full bg-blue-300 hover:bg-blue-700 py-5 px-20" 
                    onClick={()=>{googlelogin();}}>Google Auth</button> 
            </div>
            
            
            

        </div>
        
  )
}
