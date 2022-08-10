// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { get, getDatabase, child, ref} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByddDHDjAzL-hOMtMLT2PHu9mtBiCAWc4",
  authDomain: "giantshistory-7c740.firebaseapp.com",
  projectId: "giantshistory-7c740",
  storageBucket: "giantshistory-7c740.appspot.com",
  messagingSenderId: "961761551472",
  appId: "1:961761551472:web:f81b708bf52a051875c0b5",
  measurementId: "G-XCSE89EPD7",
  databaseURL: 'https://giantshistory-7c740-default-rtdb.asia-southeast1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dbRef = ref(getDatabase(app));

export function getArticle(year, handler){
  get(child(dbRef, `article/${year}`)).then((snapshot)=>{
    if(snapshot.exists()){
      handler(snapshot.val());
    }else{
      console.log('no data available');
    }
  }).catch((error)=>{
    console.log(error);
  });
}
export function getPlayers(year, handler){
  get(child(dbRef, `player/${year}`)).then((snapshot)=>{
    if(snapshot.exists()){
      handler(snapshot.val());
    }else{
      console.log('no data available');
    }
  }).catch((error)=>{
    console.log(error);
  });
}
