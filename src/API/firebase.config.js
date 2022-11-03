// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBjaRkHfRGT66RIfotp-VGPFsCcwA6yXDo',
    authDomain: 'maskanyab-e23a6.firebaseapp.com',
    projectId: 'maskanyab-e23a6',
    storageBucket: 'maskanyab-e23a6.appspot.com',
    messagingSenderId: '527821752909',
    appId: '1:527821752909:web:21cdbb7ecdd391b7bcea04',
    measurementId: 'G-EDJFC1RLPP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
