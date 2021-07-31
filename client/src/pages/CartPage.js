import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Cart from "../components/Cart";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	button: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		width: 200,
		height: 48,
		padding: "0 20px",
	},
}));
function CartPage() {
	const classes = useStyles();
	return (
		<Box>
			<Typography variant='h5' component='h1'>
				Shopping Cart
			</Typography>
			<Cart />
			<div className='cart_bottom'>
				<Typography>Subtotal (1) items</Typography>
				<Typography>&#8358;80000</Typography>
				<Button className={classes.button}>Proceed to checkout</Button>
			</div>
		</Box>
	);
}

export default CartPage;
