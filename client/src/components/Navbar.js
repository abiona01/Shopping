import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import StoreIcon from "@material-ui/icons/Store";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ShoppingCart } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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
	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	// const renderMenu = (
	// 	<Menu
	// 		anchorEl={anchorEl}
	// 		anchorOrigin={{ vertical: "top", horizontal: "right" }}
	// 		id={menuId}
	// 		keepMounted
	// 		transformOrigin={{ vertical: "top", horizontal: "right" }}
	// 		open={isMenuOpen}
	// 		onClose={handleMenuClose}
	// 	>
	// 		<MenuItem onClick={handleMenuClose}>
	// 			<Link to='/signin'>
	// 				<Typography variant='h6'>Sign In</Typography>
	// 			</Link>{" "}
	// 		</MenuItem>
	// 		<MenuItem onClick={handleMenuClose}>My account</MenuItem>
	// 	</Menu>
	// );

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
					<Badge badgeContent={4} color='secondary'>
						<ShoppingCart />
					</Badge>
				</IconButton>

				<Typography variant='h6'>Cart</Typography>
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
			<MenuItem>
				<Button
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<Link to='/signin' className='navlink mobile_navlink'>
						<AccountCircle />
						<Typography variant='h6' style={{ textTransform: "capitalize" }}>
							Sign In
						</Typography>
					</Link>
				</Button>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='static'>
				<Toolbar>
					<Typography className={classes.title} variant='h4' noWrap>
						SHOPPin
					</Typography>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							color='inherit'
							r={5}
						>
							<Link to='/signin'>
								<AccountCircle />
							</Link>
						</IconButton>
						<Button color='inherit'>
							<Link to='/' className='navlink'>
								<Typography
									variant='h6'
									style={{ textTransform: "capitalize" }}
								>
									Shop
								</Typography>
								<StoreIcon />
							</Link>
						</Button>
						<IconButton aria-label='show 4 new mails' color='inherit'>
							<Link to='/cart' className='navlink'>
								<Badge badgeContent={4} color='secondary'>
									<Typography variant='h6'>Cart</Typography>
									<ShoppingCart />
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
	);
}
