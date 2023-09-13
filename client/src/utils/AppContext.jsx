import { useState, useEffect, createContext, useContext } from 'react';
import userAuth from './verify';

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export function AppProvider(props) {
    const [authenticated, setAuthenticated] = useState(null);
    const [userData, setUserData] = useState({_id: '', fname: '', lname: '', email: '', cart:[]});

    async function checkAuthentication() {
      const result = await userAuth();
      if (result != null){
        const {result} = await userAuth();
        setAuthenticated(true);
        setUserData(result.payload); 
      } else {
        setAuthenticated(false);
      }
}
  
    useEffect(() => {
      checkAuthentication();
    }, []);

    const [ darkMode, setDarkMode ] = useState(false)

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <AppContext.Provider value={{darkMode, toggleDarkMode, authenticated, checkAuthentication, userData}}>
            { props.children }
        </AppContext.Provider>
    )
}