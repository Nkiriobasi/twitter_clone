import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { 
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore"; 



const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();


export function AuthContextProvider({ children }) {
    const [defaultImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPC7ikoXgW66ZFb0JFMRADmdD8hxYbgk2N5g&usqp=CAU');
    const [user, setUser] = useState({});

    // signInWithGoogle function
    async function signInWithGoogle() { 
        await signInWithPopup(auth, googleProvider);

        try {
            await setDoc(doc(db, 'users', user.email), {
                savedTweets: []
            })
        } catch (err) {
            console.log(err.message);
        }
    };


    // signInWithEmail function
    async function signInWithEmail(email, password) {
        return await signInWithEmailAndPassword(auth, email, password);

    }


    // signUp function
    async function signUp(email, password) {
        await createUserWithEmailAndPassword(auth, email, password);

        try {
            await setDoc(doc(db, 'users', email), {
                savedTweets: []
            })
    
        } catch (error) {
            console.log(error.message);
        }
    }

    
    // logOut function
    async function logOut() {
        return await signOut(auth);
    }

    // renderImage function
    function renderImage(classNames){
        if(!user){
            return (
                <img 
                    src={defaultImage} 
                    alt="" 
                    className={`block rounded-full object-cover ${classNames}`}
                />
            )
        }
        else if(user && user.photoURL === null){
            return (
                <img 
                    src={defaultImage} 
                    alt="" 
                    className={`block rounded-full object-cover ${classNames}`}
                />
            )
        }
        else{
            return (
                <img 
                    src={user.photoURL} 
                    alt="" 
                    className={`block rounded-full object-cover ${classNames}`}
                />
            )
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{ signUp, signInWithEmail, signInWithGoogle, logOut, user, renderImage }}>
            {children}
        </AuthContext.Provider>
    );
};



export function UserAuth() {
    return useContext(AuthContext);
}
