import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Components
import Product from "../components/Product";
// Action
import { getProducts as listProducts } from "../redux/actions/productAction";
const useStyles = makeStyles((theme) => ({
	page: {
		marginBlockStart: theme.spacing(6),
		textAlign: "start",
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		width: 300,
		height: 320,
		marginBottom: theme.spacing(2),
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
		width: 300,
		height: 48,
		padding: "0 30px",
		margin: theme.spacing(0, 0, 1, 0),
	},
}));

export default function Landing() {
	const dispatch = useDispatch();
	const getProducts = useSelector((state) => state.getProducts);
	const { products, loading, error } = getProducts;
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	const classes = useStyles();

	return (
		<Box className={classes.page}>
			<Container className='container'>
				<Typography variant='h4' className='landing_title'>
					Latest Products
				</Typography>

				<Grid
					container
					direction='row'
					className={classes.root}
					justifyContent='space-evenly'
					alignItems='center'
					spacing={4}
				>
					{loading ? (
						<h2>Loading...</h2>
					) : error ? (
						<h2>{error}</h2>
					) : (
						products.map((product) => (
							<Grid item xs={12} sm={4} lg={3} className={classes.paper}>
								<Product
									key={product._id}
									name={product.name}
									description={product.description}
									price={product.price}
									imageUrl={product.imageUrl}
									productId={product._id}
								/>
							</Grid>
						))
					)}
				</Grid>
			</Container>
		</Box>
	);
}
