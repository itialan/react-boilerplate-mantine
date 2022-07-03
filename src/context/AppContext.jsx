import React, { useState, useCallback, useReducer, useContext } from 'react';

const initialState = {
  error: null,
  isLoading: false,
  addError: () => {},
  removeError: () => {},
  setLoading: () => {},
};

export const AppContext = React.createContext(initialState);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case 'ADD_ERROR': {
      return {
        ...state,
        error: payload,
      };
    }
    case 'REMOVE_ERROR': {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

function AppProvider({ children }) {
  // const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const removeError = () => setError(null);

  // const addError = (message, status) => setError({ message, status });

  const handleSetLoading = (isLoading) => {
    dispatch({
      type: 'SET_LOADING',
      payload: isLoading,
    });
  };

  const handleAddError = ({ message, status }) => {
    dispatch({
      type: 'ADD_ERROR',
      payload: { message, status },
    });
  };

  const handleRemoveError = () => {
    dispatch({
      type: 'REMOVE_ERROR',
    });
  };

  const contextValue = {
    ...state,
    addError: handleAddError,
    removeError: handleRemoveError,
    setLoading: handleSetLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
