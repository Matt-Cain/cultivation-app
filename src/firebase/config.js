import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBz-bO-aXEZ8rQ3-97MefxrWJVmvVOQ-LQ',
  authDomain: 'cultivation-church-d4563.firebaseapp.com',
  projectId: 'cultivation-church-d4563',
  storageBucket: 'cultivation-church-d4563.appspot.com',
  messagingSenderId: '970505330631',
  appId: '1:970505330631:web:1dcd4c39e5b68ca14583e2',
  measurementId: 'G-9J293V1741',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
