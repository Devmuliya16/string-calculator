import React, { createContext, useState, useContext } from 'react';

//import string calculator functionality
import StringCalculator from "../utils/StringCalculator";

// Create the context
const utilContext = createContext();

// Create a provider component
const UtilProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState("");
    const [outPutValue, setOutputValue] = useState("");
    const [popUpMessage, setPopUpMessage] = useState({ message: "", isError: false });

    const resetAllStates = ()=>{
        setInputValue("");
        setOutputValue("");
        setPopUpMessage({message:"", isError:false});
    }


    const computeValues = () => {
        try {
            resetAllStates();
            const calculator = new StringCalculator();
            const output = calculator.add(inputValue)
            setOutputValue(output);
        } catch (e) {
            setPopUpMessage({ message: e.message, isError: true });
        }
    };

    return (
        <utilContext.Provider value={{
            inputValue,
            setInputValue,
            outPutValue,
            popUpMessage,
            computeValues,
            resetAllStates
        }}>
            {children}
        </utilContext.Provider>
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

export { UtilProvider, useUtil };
