import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp} />
			</Router>
		</div>
	);
}

export default App;
