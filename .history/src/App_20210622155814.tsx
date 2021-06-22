import {BrowserRouter ,Route} from 'react-router-dom'
import { CreateContext } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import './styles/global.scss'

const textContent = createContext('');

function App() {
  return (
    <BrowserRouter>
      <textContent.Provider value={'teste'}>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
      </textContent.Provider>
    </BrowserRouter>
  );
}

export default App;
