import { AppProvider } from './utils/AppContext'
import { useState } from 'react'
import {Home, Login, Signup,Products,Profile,Cart,About,Checkout, LargeBoats, SmallBoats} from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductPage from './pages/ProductPage'


function App() {
  const [product, setProduct] = useState(null)
  return (
    <AppProvider>
      <div>
        <Header/>
        <div className="inside-body">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/productpage' element={<ProductPage/>}/>
            <Route path='/productpage/:id' element={<ProductPage/>}/>
            <Route path='/large-water-vessels' element={<LargeBoats/>}/>
            <Route path='/small-water-vessels' element={<SmallBoats/>}/>
          </Routes>      
        </BrowserRouter>
        </div>
        <Footer/>
      </div>
    </AppProvider>
  )
}

export default App

