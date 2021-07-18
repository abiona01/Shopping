import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<Link to='/signin'>Sign In</Link> | <Link to='/signup'>Sign Up</Link>
		</header>
	);
}

export default Navbar;
