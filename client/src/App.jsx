import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { AppProvider } from './utils/AppContext'
import {Home, Login, Signup,Products,Profile,Cart,About,Checkout} from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


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
        <Header/>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products' element={<Products />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />

          </Routes>      
        </BrowserRouter>

        <Footer/>
      </div>
    </AppProvider>
  )
}

export default App
