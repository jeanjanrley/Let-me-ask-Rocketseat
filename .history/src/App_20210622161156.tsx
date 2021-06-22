import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext, useState } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import './styles/global.scss'

export const authContext = createContext({} as any);

function App() {
  const [user, setUser] = useState()

  function signInWithGoogle()

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
