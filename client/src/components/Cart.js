import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 100,
	},
}));
function Cart() {
	const classes = useStyles();
	return (
		<Box className='cart_box'>
			<div className='cart_div'>
				<div>
					<img
						className='cart_img'
						src='data:image/jpeg;base64,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'
						alt=''
					/>
				</div>
				<div>
					<Typography>Product 1</Typography>
				</div>
				<div>
					<Typography>&#8358;8000</Typography>
				</div>
				<FormControl className={classes.formControl}>
					<Select
						displayEmpty
						className={classes.selectEmpty}
						inputProps={{ "aria-label": "Without label" }}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
					</Select>
				</FormControl>
				<div>
					<DeleteIcon color='secondary' />
				</div>
			</div>
		</Box>
	);
}

export default Cart;
