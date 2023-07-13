import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.concat(action.item); // Here concat is JS function which returns the new array after adding the new item without modifying the previous array.
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	} else if (action.type === "REMOVE") {
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
	return(<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>);
	
};

export default CartProvider;
