import {BrowserRouter ,Route} from 'react-router-dom'

import { NewRoom } from "./pages/NewRoom";
import {Home} from './pages/Home'

import './styles/global.scss'


import { AuthContextProvider } from './contexts/AuthContext'

function App() {


  return(

    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
        <Route path="/rooms/:" component={NewRoom}/>
      </AuthContextProvider>

    </BrowserRouter>

  )}

export default App;
