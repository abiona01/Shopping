import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Cart from "../components/Cart";
import { Typography, Button } from "@material-ui/core";
//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
const useStyles = makeStyles((theme) => ({
	page: {
		marginBlockStart: theme.spacing(3),
		textAlign: "start",
	},
	button: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		width: 250,
		height: 48,
		padding: "0 30px",
		marginTop: "10px",
	},
}));
function CartPage() {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	useEffect(() => {}, []);
	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	const getCartSubTotal = () => {
		return cartItems
			.reduce((price, item) => price + item.price * item.qty, 0)
			.toFixed(2);
	};
	const classes = useStyles();
	return (
		<Box className={classes.page}>
			{cartItems.length === 0 ? (
				<Typography>
					Your Cart is Empty <Link to='/'>Go Back</Link>
				</Typography>
			) : (
				cartItems.map((item) => (
					<Cart
						key={item.num}
						item={item}
						qtyChangeHandler={qtyChangeHandler}
						removeHandler={removeFromCartHandler}
					/>
				))
			)}
			<div className='cart_bottom'>
				<Typography>Subtotal ({getCartCount()}) items</Typography>
				<Typography>&#8358;{getCartSubTotal()}</Typography>
				<Button className={classes.button}>Proceed to checkout</Button>
			</div>
		</Box>
	);
}

export default CartPage;
