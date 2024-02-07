"use client";

import { createContext, useReducer } from "react";

export const carContext = createContext();

const initialState = {
  carProducts: [],
};

const reducer = (state, { type, payload, products }) => {
  const { carProducts } = state;
  switch (type) {
    case "add-to-cart": {
      const product = products.find((pr) => pr.id === payload);
      console.log(product);
      return {
        ...state,
        carProducts: [{ ...product }],
      };
    
    }
    default:
      return state;
  }
};

export default function CarContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextState = { ...state, dispatch };
  return (
    <carContext.Provider value={contextState}>{children}</carContext.Provider>
  );
}
