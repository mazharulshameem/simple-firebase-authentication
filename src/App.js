
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider ();
   const handleGoogleSignIn = ()=>{
  signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user;
    setUser(user);
    console.log(user)
  })
  .catch(error =>{
    console.error('error:', error)
  })

}
   const handleGoogleSignOut = () => {
    signOut(auth)
    .then(()=> {
      setUser({})
    })
    .catch( ()=> {
      setUser({})
    })

   };
    
   const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
   })
   .catch((error) => {
    console.error('error: ',  error)
   })
      
  }
  const handleGithubSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };


  return (
    <div className="App">
      {user.uid ? (
        <div>
          <button onClick={handleGoogleSignOut}>Sign Out Google</button>
          <button onClick={handleGithubSignOut}>Sign Out Github</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Sign In Google</button>
          <button onClick={handleGithubSignIn}>Sign In GitHub</button>
        </div>
      )}

      {user.uid && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p> Email Address: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
