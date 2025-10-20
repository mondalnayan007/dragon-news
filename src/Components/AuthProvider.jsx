import  { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);


    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)
    

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =() =>{
       return signOut(auth);
    }

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser , updateData);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        };
    },[auth]);

    const authInfo = {
        user,
        setUser,
         createUser,
         logIn,
         logOut,
         loading,
         setLoading,
         updateUser,
    }

    

    return <AuthContext value={authInfo}>
                {children}
            </AuthContext>;
        
   
};

export default AuthProvider;