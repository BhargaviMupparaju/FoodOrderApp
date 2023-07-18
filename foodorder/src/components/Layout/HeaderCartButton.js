import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	// reduce is a helper function. It will help to return a single value from the array.
	// For example if we add more than item in cart , we need to extract the total number of items in the cart. Instead of considering
	// every single value, we can simple use reduce function which do sum of all cart items

	// // 	// const result = arr.reduce((accumulator, currentValue) => {
	// //   // d
	// //   return accumulator;
	// }, initialValue);

	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

	useEffect(() => {
	  if (items.length === 0) {
		return;
	  }
	  setBtnIsHighlighted(true);
  
	  const timer = setTimeout(() => {
		setBtnIsHighlighted(false);
	  }, 300);
  
	  return () => {
		clearTimeout(timer);
	  };
	}, [items]);
	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
