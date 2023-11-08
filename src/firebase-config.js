import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMeI0_8jgVZ_sv98nefcLgkbUxDjMErzU",
  authDomain: "olympiad-2023-852b1.firebaseapp.com",
  projectId: "olympiad-2023-852b1",
  storageBucket: "olympiad-2023-852b1.appspot.com",
  messagingSenderId: "321711809871",
  appId: "1:321711809871:web:aea19a46bc7063a75b513a",
  measurementId: "G-JZSVEER1L9"
};
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);