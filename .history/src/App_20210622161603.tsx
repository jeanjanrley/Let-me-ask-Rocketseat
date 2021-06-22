import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext, useState } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import './styles/global.scss'
import {firebase, auth} from './services/firebase';

export const authContext = createContext({} as any);

function App() {
  const [user, setUser] = useState()

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if (result.user){
              const {displayName, photoURL, uid} = result.user
            }
            
  }

  return (
    <BrowserRouter>
      <authContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
      </authContext.Provider>
    </BrowserRouter>
  );
}

export default App;
