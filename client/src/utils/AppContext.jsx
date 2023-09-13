import { useState, useEffect, createContext, useContext } from 'react';
import verifyUser from './verify';

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export function AppProvider(props) {
    const [authenticated, setAuthenticated] = useState(null);

    async function checkAuthentication() {
      const isAuthenticated = await verifyUser();
      setAuthenticated(isAuthenticated);
    }
  
    useEffect(() => {
      checkAuthentication();
    }, []);

    // const [ user, setUser ] = useState({id: 1, name: 'Ben'})
    const [ darkMode, setDarkMode ] = useState(false)

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <AppContext.Provider value={{darkMode, toggleDarkMode, authenticated, checkAuthentication}}>
            { props.children }
        </AppContext.Provider>
    )
}