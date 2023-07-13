import classes from "./MealItem.module.css";

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`; // It will fix the decimal place to two numbers.
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
		</li>
	);
};

export default MealItem;
