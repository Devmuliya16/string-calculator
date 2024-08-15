import React, { createContext, useState, useContext } from 'react';

//import string calculator functionality
import StringCalculator from "../utils/StringCalculator";

// Create the context
const utilContext = createContext();

// Create a provider component
const utilProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState("");
    const [outPutValue, setOutputValue] = useState("");
    const [popUpMessage, setPopUpMessage] = useState({message:"", isError:""});

    const computeValues = (inputValue) => {
        try {
            const calculator = new StringCalculator();
            setOutputValue(calculator.add());

        } catch (e) {
            setPopUpMessage({message:e.message, isError:true});
        }
    };

    return (
        <utilProvider.Provider value={{ value, updateValue }}>
            {children}
        </utilProvider.Provider>
    );
};

// Custom hook to use the context
const useUtil = () => {
    const context = useContext(utilContext);
    if (context === undefined) {
        throw new Error('useUtil must be used within a utilProvider');
    }
    return context;
};

export { utilProvider, useUtil };
