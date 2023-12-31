import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
	return (
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>dfjks</span>
		</button>
	);
};

export default HeaderCartButton;
