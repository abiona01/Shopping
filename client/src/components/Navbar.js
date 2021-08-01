import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import StoreIcon from "@material-ui/icons/Store";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ShoppingCart } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const theme = createTheme({
	palette: {
		primary: {
			main: "#171717",
		},
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});
const useStyles = makeStyles((theme) => ({
	root: {
		padding: "0 20px",
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

export default function PrimarySearchAppBar() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label='show 4 new mails' color='inherit'>
					<Link to='/cart' className='navlink mobile_navlink'>
						<ShoppingCart />
						<Badge badgeContent={cartItems.length} color='secondary'>
							<Typography variant='h6'>Cart</Typography>
						</Badge>
					</Link>
				</IconButton>
			</MenuItem>
			<MenuItem>
				<Button color='inherit'>
					<Link to='/' className='navlink mobile_navlink'>
						<StoreIcon />
						<Typography variant='h6' style={{ textTransform: "capitalize" }}>
							Shop
						</Typography>
					</Link>
				</Button>
			</MenuItem>
		</Menu>
	);

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.grow} color='primary'>
				<AppBar position='static'>
					<Toolbar>
						<Typography className={classes.title} variant='h4' noWrap>
							SHOPPin
						</Typography>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<Button color='inherit'>
								<Link to='/' className='navlink'>
									<StoreIcon />
									<Typography
										variant='h6'
										style={{ textTransform: "capitalize" }}
									>
										Shop
									</Typography>
								</Link>
							</Button>
							<IconButton aria-label='show 4 new mails' color='inherit'>
								<Link to='/cart' className='navlink'>
									<ShoppingCart />
									<Badge badgeContent={cartItems.length} color='secondary'>
										<Typography variant='h6'>Cart</Typography>
									</Badge>
								</Link>
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
							>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
				{/* {renderMenu} */}
			</div>
		</ThemeProvider>
	);
}
