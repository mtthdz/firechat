import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore'; // firestore db is real time
import 'firebase/auth'; // enables google login

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

// refactored version of Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyB8U8eh0fVLaKGTWVgoHagP9J1XGI8LIkk",
  authDomain: "firechat-c4b22.firebaseapp.com",
  databaseURL: "https://firechat-c4b22.firebaseio.com",
  projectId: "firechat-c4b22",
  storageBucket: "firechat-c4b22.appspot.com",
  messagingSenderId: "894535656815",
  appId: "1:894535656815:web:6908e728cf0a52d328f49a"
})

// firebase SDKs set as global variables
const firestore = firebase.firestore();
const auth = firebase.auth();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>

      <section>
        {/* if user is logged in, chatroom will open */}
        {/* if user is logged out (null), sign-in window will show */}
        {user ? <Chatroom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    // this will provide a pop-up signin window
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
}

export default App;
