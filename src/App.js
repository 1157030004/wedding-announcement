import Home from "./pages/home/Home";
import Wish from "./pages/wish/Wish";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/wishboard">
					<Wish />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
