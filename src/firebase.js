import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDttxQxj16S3bUPQaoF_Mmbgd8rcm4UOXs",
    authDomain: "eunwitter-acfdb.firebaseapp.com",
    projectId: "eunwitter-acfdb",
    storageBucket: "eunwitter-acfdb.appspot.com",
    messagingSenderId: "183432452871",
    appId: "1:183432452871:web:e67f590959c7af164ac3a2"
  };

export default firebase.initializeApp(firebaseConfig);