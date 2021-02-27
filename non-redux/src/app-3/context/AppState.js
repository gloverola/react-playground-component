import React from 'react';
import AppContext from './app-context'

const AppState = ({children}) => {
    return (
        <AppContext.Provider value={{
            message: "this is a message"
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState
