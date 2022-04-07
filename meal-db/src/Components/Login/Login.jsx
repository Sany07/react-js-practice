import React, { useState } from 'react';
import { getAuth, signInWithPopup,  GoogleAuthProvider,signOut } from "firebase/auth";
import auth from '../../firebase.init';



const Login = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
          .then(result => {
            const user = result.user;
            setUser(user);
          })
          .catch(error => {
            console.error('error', error)
          })
    }

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch(error => {
            setUser({});
          });
        }
    return (
        <div>

            <div>

            {user.displayName}

            </div>
            <button onClick={handleGoogleSignIn}>Sign With Google</button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Login;