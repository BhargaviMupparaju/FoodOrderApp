import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsVaild] = useState(true);
	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount; // + will convert the string to integer.

		if (enteredAmount.length.trim === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsVaild(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef} // Since the Input is the custom component we can't directly used the refs. So we have
				//to use the forwardRef in the Input component.
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
			{!amountIsValid && <p> Please enter a valid amount from (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
