import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const singInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      });
  }

  // state change observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
    });
    return () => unsubscribed;
  }, [])
  
  const logOut = () => {
    signOut(auth)
      .then(() => {
      
      });
  }

  return {
    user,
    singInUsingGoogle,
    logOut
  }
}
export default useFirebase;