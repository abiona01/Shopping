import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
function Product({ imageUrl, name, price, productId }) {
	const classes = useStyles();
	return (
		<div>
			<Card>
				<CardActionArea>
					<img src={imageUrl} alt={name} />

					<Typography
						gutterBottom
						variant='h5'
						component='h2'
						className='product_name'
					>
						{name}
					</Typography>
					<Typography variant='h6' component='h2'>
						&#8358;{price}
					</Typography>
				</CardActionArea>
				<CardActions>
					<Button size='large' color='primary' className={classes.button}>
						<Link to={`/product/${productId}`}>View Product</Link>
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

export default Product;
