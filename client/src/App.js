import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { AppProvider } from './utils/AppContext'
import {Home, Login, Signup,Products,Profile,Cart,About,Checkout} from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductPage from "./pages/ProductPage"


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
      console.log(result)
      if (result?.status === 'success') {
        return true;  // logic for successful authentication
      } else {
        return false;
      }
    } catch(err){
      return false;
    }
  } else {
    return null// implement logic for non-authenticated user
  }
}

function App() {
  


  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function checkAuthentication() {
      const isAuthenticated = await verifyUser();
      setAuthenticated(isAuthenticated);
    }

    checkAuthentication();
  }, [])

  return (
    <AppProvider>
      <div>
        <Header/>
        <div class="inside-body">
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
            <Route path='/productpage' element={<ProductPage/>}/>
          </Routes>      
        </BrowserRouter>
        </div>
        <Footer/>
      </div>
    </AppProvider>
  )
}

export default App

