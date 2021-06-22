import {BrowserRouter ,Route} from 'react-router-dom'
import { createContext } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import './styles/global.scss'

export const textContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <textContent.Provider value={'teste'}>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
      </textContent.Provider>
    </BrowserRouter.provider>
  );
}

export default App;
