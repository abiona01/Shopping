import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto",
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));

export default function Header(props) {
	const classes = useStyles();
	const { title } = props;

	return (
		<>
			<Toolbar className={classes.toolbar}>
				<Button size='small'>Subscribe</Button>
				<Typography
					component='h2'
					variant='h5'
					color='inherit'
					align='center'
					noWrap
					className={classes.toolbarTitle}
				>
					{title}
				</Typography>

				<IconButton>
					<ShoppingCart />
				</IconButton>
				<Button variant='outlined' size='small'>
					About
				</Button>
				<Button variant='outlined' size='small'>
					Sign up
				</Button>
			</Toolbar>
		</>
	);
}

Header.propTypes = {
	sections: PropTypes.array,
	title: PropTypes.string,
};