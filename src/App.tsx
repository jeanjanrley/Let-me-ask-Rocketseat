import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

import "./styles/global.scss";


import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/adminRoom";

function App() {


	return (

		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/rooms/new" component={NewRoom} />
					<Route path="/rooms/:id" component={Room} />
					<Route path="/admin/rooms/:id" component={AdminRoom} />
				</Switch>
			</AuthContextProvider>

		</BrowserRouter>

	);
}

export default App;
