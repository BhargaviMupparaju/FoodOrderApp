import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		// Here concat is JS function which returns the new array after adding the new item without modifying the previous array.
		// If the item is already present in the cart we just need to update the total
		// amount instead of adding the same item again. to avoid that we need to have check here.

		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
		// find index will provide the index of item in the array
		// if we item in array is same as the item dispatched by the action.

		const existingCartItem = state.items[existingCartItemIndex]; // If the item is already part of array then it will set to variable.

		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};

			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === "REMOVE") {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return defaultCartState;
};

const CartProvider = (props) => {
	// Here if the meal is already present in the cart, we just need to update the meal
	// So if any components affect with context, then they has to be reevaluated based on the items in the cart. so we will use useReducer.

	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
