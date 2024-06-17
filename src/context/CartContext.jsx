import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) {
        const newState = [...state];
        newState.splice(itemIndex, 1);
        return newState;
      }
      return state;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, getTotal }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
