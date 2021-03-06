import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import { NewRoom } from "./pages/NewRoom";
import {Home} from './pages/Home'
import './styles/global.scss'
import {firebase, auth} from './services/firebase';


import { AuthContextProvider } from './contexts/AuthCotext'

function App() {


  return(

    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </AuthContextProvider>

    </BrowserRouter>

  )}

export default App;
