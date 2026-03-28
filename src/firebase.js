// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAmFbd1ahNR847kfwR-X39FtdiuW93E19s",
  authDomain: "netflix-clone-76227.firebaseapp.com",
  projectId: "netflix-clone-76227",
  storageBucket: "netflix-clone-76227.firebasestorage.app",
  messagingSenderId: "732539131762",
  appId: "1:732539131762:web:db9ed5116b3638363d2feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(" ")));
    }
}

const login = async(email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(" ")));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth,db,login,signup,logout};