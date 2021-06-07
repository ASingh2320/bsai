import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAMxqe3-iSj2PmNpT8_sBYTihmq0isoL3Y",
    authDomain: "bsai-5469b.firebaseapp.com",
    projectId: "bsai-5469b",
    storageBucket: "bsai-5469b.appspot.com",
    messagingSenderId: "154907439859",
    appId: "1:154907439859:web:a4904f1ac0c750d9ee7d86"
});

export const auth = app.auth();
export default app;