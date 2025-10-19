import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);


    const [user,setUser] = useState();
    console.log(user)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
       return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        };
    },[auth]);

    const authInfo = {
        user,
        setUser,
         createUser,
         logOut,
    }

    

    return <AuthContext value={authInfo}>
                {children}
            </AuthContext>;
        
   
};

export default AuthProvider;