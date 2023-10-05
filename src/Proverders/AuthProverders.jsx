import React, { createContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();


export  const authContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProverders = ({children}) => {

const logInByGoogle = ()=>{
    signInWithPopup(auth, googleProvider)
}























    const authInfo = {
        logInByGoogle,

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProverders;