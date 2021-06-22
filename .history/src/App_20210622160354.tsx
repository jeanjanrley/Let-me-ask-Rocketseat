import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import './styles/global.scss'

export const textContext = createContext('');

function App() {
  const value 


  return (
    <BrowserRouter>
      <textContext.Provider value={'teste'}>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
      </textContext.Provider>
    </BrowserRouter>
  );
}

export default App;
