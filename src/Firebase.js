import firebase from 'firebase'

const FirebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCKWsbyxdam7dyyDVy84RJ_ljOj4hdoIKg",
        authDomain: "to-do-app-66c1f.firebaseapp.com",
        projectId: "to-do-app-66c1f",
        storageBucket: "to-do-app-66c1f.appspot.com",
        messagingSenderId: "686262166173",
        appId: "1:686262166173:web:c2d05190389b0f6247ea74",
        measurementId: "G-RWQN8N29X8"
    }
)
const db = FirebaseApp.firestore()

export default db