import React, {useState} from 'react';
import AppContext from './app-context'

const AppState = ({children}) => {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <AppContext.Provider value={{
            message: "this is a message from context",
            isAuth,
            setIsAuth
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState
