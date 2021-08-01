import React from "react";
import { Link } from "react-router-dom";
import { Button, createTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";

const theme = createTheme({
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});
const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 60,
	},
}));
function Cart({ item, qtyChangeHandler, removeHandler }) {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Box className='cart_box'>
				<div className='cart_div'>
					<div>
						<Link to={`/product/${item.product}`} className='mobile_navlink'>
							<Typography variant='body2'>{item.name}</Typography>
						</Link>
					</div>
					<div>
						<Typography variant='body2'>&#8358;{item.price}</Typography>
					</div>
					<FormControl className={classes.formControl}>
						<Select
							value={item.qty}
							onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
							displayEmpty
							className={classes.selectEmpty}
							inputProps={{ "aria-label": "Without label" }}
						>
							{[...Array(item.countInStock).keys()].map((x) => (
								<MenuItem value={x + 1}>{x + 1}</MenuItem>
							))}
						</Select>
					</FormControl>
					<div>
						<Button onClick={() => removeHandler(item.product)}>
							<DeleteIcon color='secondary' />
						</Button>
					</div>
				</div>
			</Box>
		</ThemeProvider>
	);
}

export default Cart;
