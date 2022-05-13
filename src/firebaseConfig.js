import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyC8B0Ew93QCiewVRnYeXvtrEQahZUBxz_M",

    authDomain: "hurones-6d12d.firebaseapp.com",

    projectId: "hurones-6d12d",

    storageBucket: "hurones-6d12d.appspot.com",

    messagingSenderId: "35006083512",

    appId: "1:35006083512:web:fccc9abce1b37a8fa05f4d"
    
  };
 
  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);

  export const db = getFirestore(app);

  export const auth = getAuth(app);