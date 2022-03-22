import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ secret, setSecret ] = useState('');
    const [ confirmSecret, setConfirmSecret ] = useState('');
    
    const value = {
        username,
        setUsername,
        email,
        setEmail,
        secret,
        setSecret,
        confirmSecret,
        setConfirmSecret
    };

    return <Context.Provider value={ value }>{ props.children }</Context.Provider>;
};
