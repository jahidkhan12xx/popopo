import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    

    // Email authentication system

    // Sign Up

    const signUp = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

    // Sign In

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Sign Out

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    // Facebook Login

    

    const provider = new FacebookAuthProvider();
    const facebookLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const GoogleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider);
    }

    // Observer

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    },[])
    
    
    
    
    const authInfo = {
        user,
        signUp,
        signIn,
        logOut,
        facebookLogin,
        googleLogin,
        loading



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;