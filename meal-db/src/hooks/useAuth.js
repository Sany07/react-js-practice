
import { getAuth, signInWithPopup,  GoogleAuthProvider,signOut } from "firebase/auth";
import auth from "../firebase.init";
const googleProvider = new GoogleAuthProvider();

import React, { useEffect, useState } from 'react';

function useAuth(props) {

    const [user, setUser] = useState([]);

    const singInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{})
    }

    return {
        user,
        singInWithGoogle
    }
}

export default useAuth;