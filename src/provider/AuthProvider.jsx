import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logoutUser = ()=>{
        return signOut(auth);
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUsers(currentUser);
            console.log('current user', currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        users,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;