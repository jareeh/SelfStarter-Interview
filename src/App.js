import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import { UserProvider } from './Context';

function App() {
	return (
		<UserProvider>
			<div className="App">
				<Router basename="/SelfStarter-Interview" >
					<Nav />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/profile">
							<Profile />
						</Route>

						<Route path="/movie/:id">
							<MovieDetail />
						</Route>

						<Route path="/login">
							<Login />
						</Route>

						<Route path="/register">
							<Register />
						</Route>
					</Switch>
				</Router>
			</div>
		</UserProvider>
	);
}

export default App;
