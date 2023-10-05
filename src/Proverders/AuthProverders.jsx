import  { createContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GithubAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const GithubProvider = new GithubAuthProvider();

export  const authContext = createContext(null)


const AuthProverders = ({children}) => {

const logInByGoogle = ()=>{
  return  signInWithPopup(auth, googleProvider)
}

const LogInByGithub =()=>{
    return signInWithPopup(auth, GithubProvider)
}





















    const authInfo = {
        logInByGoogle,
        LogInByGithub,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProverders;