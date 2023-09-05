import { useEffect, useState } from "react"
import Cookies from 'js-cookie'

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
    <>

    </>
  )
}

export default App