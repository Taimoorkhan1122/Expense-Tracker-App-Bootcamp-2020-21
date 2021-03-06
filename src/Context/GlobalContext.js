import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
  icomeExpense: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider  Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const expenseState = useState(true);

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
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        expenseState,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
