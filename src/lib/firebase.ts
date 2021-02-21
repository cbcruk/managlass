import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCKbi_xSrH-2lWj54PrKFBX-FCBX9-3Pe0',
  authDomain: 'managlass-4d341.firebaseapp.com',
  projectId: 'managlass-4d341',
  storageBucket: 'managlass-4d341.appspot.com',
  messagingSenderId: '196530241174',
  appId: '1:196530241174:web:8557a26dc7361f103b8cb7',
  measurementId: 'G-67LY9SZBDX',
})

export const provider = new firebase.auth.GoogleAuthProvider()

export function getIdToken() {
  return firebaseApp.auth().currentUser.getIdToken()
}

export default firebaseApp
