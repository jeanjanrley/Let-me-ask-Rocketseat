import {BrowserRouter ,Route} from 'react-router-dom'
import {CreateContext} from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import './styles/global.scss'

const textContent = createTextContent()

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
    </BrowserRouter>
  );
}

export default App;
