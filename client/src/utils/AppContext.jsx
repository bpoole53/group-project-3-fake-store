import { createContext, useContext, useState } from 'react'

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export function AppProvider(props) {

    const [ user, setUser ] = useState({id: 1, name: 'Ben'})


    return (
        <AppContext.Provider value={ user }>
            { props.children }
        </AppContext.Provider>
    )
}