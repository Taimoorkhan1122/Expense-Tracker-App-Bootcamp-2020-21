import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "camera", amount: +500 },
    { id: 2, text: "Salary", amount: +15000 },
    { id: 3, text: "snacks", amount: -100 },
    { id: 4, text: "grossaries", amount: -2500 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider  Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Dispatch Actions
  // Delete Transactions
  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id,
    });
  }

  // Add Transactions
  function addTransactions(transaction) {
    return {
      type: "ADD_TRANSACTION",
      payload: transaction,
    };
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
