import { createContext, useContext, useEffect, useState } from "react";
import { auth } from './../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const UserAuthContext = createContext();

export function CreateAuthContextProvider(childern) {
    const [user,setUser] = useState('')
    function signUp (email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn (email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unSubscribe();
        }
    },[])
  return <UserAuthContext.Provider value={{user,signUp}}>{childern}</UserAuthContext.Provider>;
}


export function useUserAuth(){
    return useContext(UserAuthContext)
}