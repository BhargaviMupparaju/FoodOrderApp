import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
	// Now here we can send the entire component defintion in the forwardrefs
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
			{/* Here we used the htmlFor to associate the input.id to the input tag. since the props.input is the object in MealItem component
            We can just use the spread operator to get all the values in the input object. */}
		</div>
	);
});

export default Input;
