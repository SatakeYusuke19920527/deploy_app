import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Main from './pages/Main';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/createUser" component={CreateUser} />
				<Route path="/main" component={Main} />
			</Switch>
		</Router>
	);
}

export default App;
