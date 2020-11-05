
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBW35uZn3PQr7cLeKIs4HcCrIe-Rbp0GeM",
    authDomain: "portfolio-site-9ddc4.firebaseapp.com",
    databaseURL: "https://portfolio-site-9ddc4.firebaseio.com",
    projectId: "portfolio-site-9ddc4",
    storageBucket: "portfolio-site-9ddc4.appspot.com",
    messagingSenderId: "121998112773",
    appId: "1:121998112773:web:34f6c3da5c74525ae4446c",
    measurementId: "G-DVHWET6JS8"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()


export default db