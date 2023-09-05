import { createContext, useContext, useState } from 'react'

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export function AppProvider(props) {

    const [ user, setUser ] = useState({id: 1, name: 'Ben'})
    const [ darkMode, setDarkMode ] = useState(false)

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <AppContext.Provider value={{ user, darkMode, toggleDarkMode}}>
            { props.children }
        </AppContext.Provider>
    )
}