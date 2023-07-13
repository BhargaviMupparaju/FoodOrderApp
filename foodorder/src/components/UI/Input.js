import classes from "./Input.module.css";

const Input = (props) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>  
			<input {...props.input} /> 
            {/* Here we used the htmlFor to associate the input.id to the input tag. since the props.input is the object in MealItem component
            We can just use the spread operator to get all the values in the input object. */}
		</div>
	);
};

export default Input;
