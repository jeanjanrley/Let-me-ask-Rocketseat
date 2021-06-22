import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import { NewRoom } from "./pages/NewRoom";
import {Home} from './pages/Home'
import './styles/global.scss'
import {firebase, auth} from './services/firebase';


import { AuthContextProvider } from './contexts/AuthCotext'

function App() {

  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user){
        const {displayName, photoURL, uid} = user

              if(!displayName || !photoURL){
                throw new Error('Missing information from Google account.')
              }

              setUser({
                id: uid,
                nome: displayName,
                avatar: photoURL,
              
              })
      }
    })

    return() => {
      unsubscribe();
    }

  }, [])


  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider)

        if(result.user){
              const {displayName, photoURL, uid} = result.user

              if(!displayName || !photoURL){
                throw new Error('Missing information from Google account.')
              }

              setUser({
                id: uid,
                nome: displayName,
                avatar: photoURL,
              
              })
            }
    }

  return(

    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
        
    </BrowserRouter>

  )}

export default App;
