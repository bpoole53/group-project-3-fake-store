import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { AppProvider } from './utils/AppContext'
import {Home, Login, Signup} from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  
  async function verifyUser(){
    if(Cookies.get('auth-cookie')){
      try {
        const query = await fetch('api/user/verify', {
          method: "POST",
          body: '',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const result = await query.json()
        if (result?.status === 'success') {
          // logic for successful authentication
        }
      } catch(err){
        
      }
    } else {
      // implement logic for non-authenticated user
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <AppProvider>
      <div>
        <header>
          <h1>A title</h1>
        </header>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

          </Routes>      
        </BrowserRouter>

        <footer>
          <p>some footer</p>
        </footer>
      </div>
    </AppProvider>
  )
}

export default App