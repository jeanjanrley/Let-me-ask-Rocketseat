import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext, useState } from 'react'
import { NewRoom } from "./pages/NewRoom";
import {Home} from './pages/Home'
import './styles/global.scss'
import {firebase, auth} from './services/firebase';

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => {};
}

type User = {
  id: string;
  nome: string;
  avatar: string;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>()

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if (result.user){
              const {displayName, photoURL, uid} = result.user

              if(!displayName || !photoURL){
                throw new Error('Missing information from Google account.')
              }

              setUser({
                id: uid,
                nome: displayName,
                avatar: photoURL
              })
            }
            
  }

  return(
    <BrowserRouter>
      <AuthContext.Provider value={{user, signInWithGoogle}}>
          <Route path="/rooms/new" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}}

export default App;
