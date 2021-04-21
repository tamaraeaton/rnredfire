import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6rlXMMs-35vijQTF7l5N1WgQrih-KL_E",
    authDomain: "rn-x-77734.firebaseapp.com",
    projectId: "rn-x-77734",
    storageBucket: "rn-x-77734.appspot.com",
    messagingSenderId: "1040681671077",
    appId: "1:1040681671077:web:bcf924cb1f5eee8f1eb04c",
    measurementId: "G-S2Y3PN066Y"
};

firebase.initializeApp(config);

export {
    firebase
}