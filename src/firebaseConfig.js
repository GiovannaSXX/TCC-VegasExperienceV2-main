import React from 'react';
import firebase from '@react-native-firebase/app';
import firebase from "firebase"
import "firebase/firestore"


// Configurações do Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyDm9lXUvyY_5A9TZslEwNEUv64xa-UN6y0",
    authDomain: "vegasexperience-18356.firebaseapp.com",
    projectId: "vegasexperience-18356",
    storageBucket: "vegasexperience-18356.appspot.com",
    messagingSenderId: "741722450327",
    appId: "1:741722450327:web:ed06d22675a4f91c91fcd2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;

