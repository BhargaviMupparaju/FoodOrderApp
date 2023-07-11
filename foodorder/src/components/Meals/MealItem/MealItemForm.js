import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
				// Here we are sending the input object to the Input.js with the label amount. There we can extract the object with the spread operator.
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
