import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// Actions
import { getProductDetails } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartActions";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	control: {
		textAlign: "center",
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
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));
const imageStyle = {
	margin: "0 auto",
};
function ProductPage({ match, history }) {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.getProductDetails);
	const { loading, error, product } = productDetails;
	const handleChange = (e) => {
		setQty(e.target.value);
	};
	useEffect(() => {
		if (product && match.params.id !== product._id) {
			dispatch(getProductDetails(match.params.id));
		}
	}, [dispatch, match, product]);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		history.push(`/cart`);
	};
	const classes = useStyles();
	return (
		<Container className='product-info'>
			{loading ? (
				<Typography variant='h2'>Loading...</Typography>
			) : error ? (
				<Typography variant='h4'>{error}</Typography>
			) : (
				<Grid
					container
					className={classes.root}
					justifyContent='center'
					spacing={2}
				>
					<Grid item lg={4} sm={12} xs={12}>
						<div className='paper paper1'>
							<img
								className='product-image'
								style={imageStyle}
								src={product.imageUrl}
								alt={product.name}
							/>
						</div>
					</Grid>
					<Grid item lg={4} sm={12} xs={12}>
						<div className='paper paper2'>
							<Typography variant='h6'>{product.name}</Typography>
							<Typography>{product.description}</Typography>
						</div>
					</Grid>
					<Grid item lg={4} sm={12} xs={12}>
						<div className='paper paper3'>
							<div className='info_div'>
								<Typography variant='body2'>Price: </Typography>
								<Typography variant='body2'>&#8358;{product.price}</Typography>
							</div>
							<div className='info_div'>
								<Typography variant='body2'>Status:</Typography>
								<Typography variant='body2'>
									{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
								</Typography>
							</div>
							<div className='info_div'>
								<Typography variant='body2'>Qty:</Typography>
								<FormControl className={classes.formControl}>
									<Select
										value={qty}
										onChange={handleChange}
										className={classes.selectEmpty}
										inputProps={{ "aria-label": "Without label" }}
									>
										{[...Array(product.countInStock).keys()].map((x) => (
											<MenuItem key={x + 1} value={x + 1}>
												{x + 1}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>
							<div className='info_div_button'>
								<Button
									size='large'
									color='primary'
									onClick={addToCartHandler}
									className={classes.button}
								>
									<Link to='/cart'>Add to Cart</Link>
								</Button>
							</div>
						</div>
					</Grid>
				</Grid>
			)}
		</Container>
	);
}

export default ProductPage;
