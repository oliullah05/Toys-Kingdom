import  { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GithubAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const GithubProvider = new GithubAuthProvider();

export  const authContext = createContext(null)


const AuthProverders = ({children}) => {
const [user,setUser]=useState(null)



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser)
    })
    return () => {
        unsubscribe()
    }
}, [])




const logInByGoogle = ()=>{
  return  signInWithPopup(auth, googleProvider)
}

const LogInByGithub =()=>{
    return signInWithPopup(auth, GithubProvider)
}

const RegisterByEmailPassword =(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)
}


const logInByEmailPassword =(email,password)=>{
  return  signInWithEmailAndPassword(auth, email, password)
}


const addPhotoAndDisplayName =(displayName,photoURL)=>{
    updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: photoURL
      }).then(() => {
        console.log("Profile updated!");
        // ...
      }).catch((error) => {
        console.log(error);
        // ...
      });
}





const logOut =()=>{
   return signOut(auth)
      
}














    const authInfo = {
        logInByGoogle,
        LogInByGithub,
        RegisterByEmailPassword,
        logInByEmailPassword,
        user,
        addPhotoAndDisplayName,
        logOut
        

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProverders;