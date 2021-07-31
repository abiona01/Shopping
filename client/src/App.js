import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
//Pages
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
function App() {
	return (
		<div className='App' color='primary'>
			<Router>
				<Navbar />
				<main>
					<Switch>
						<Route exact path='/signin' component={SignIn} />
						<Route exact path='/signup' component={SignUp} />
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/product' component={ProductPage} />
						<Route exact path='/cart' component={CartPage} />
						<LandingPage />
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
