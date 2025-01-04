import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//initialState
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    user: { username: "", password: "" }
}
//create context 
export const GlobalContext = createContext(initialState);



//Global Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //delete transaction
    const deleteTransaction = (id) => {
        // eslint-disable-next-line no-undef
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    const userSignUp = (user) => {
        dispatch({
            type: 'USER_SIGNUP',
            payload: user
        })
    }

    const userLogin = (user) => {
        dispatch({
            type: 'USER_LOGIN',
            payload: user
        })
    }

    // Logout user
    const userLogout = () => {
        dispatch({
            type: "USER_LOGOUT",
        });
    };
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            user: state.user,
            deleteTransaction,
            addTransaction,
            userSignUp,
            userLogin,
            userLogout
        }}
        >
            {children}
        </GlobalContext.Provider>)
}
