import { useState } from "react";

export default function Signup(){
    const [formData, setFormData] = useState({fname: '', lname: '', email: '', password: ''})
    const [ signupResult, setSignupResult ] = useState("")

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      const handleFormSubmit = async(e) => {
        e.preventDefault()
        const query = await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        if( !query.ok ) {
          setSignupResult("fail")
        } else {
          const result = await query.json()
          if( result.status === "success" && result.payload ){
            window.location.href = "/"
          }
        }
      }
    
      return (
        <div className="signupForm justify-center">
          <h1>Welcome! Register Below: </h1>
          <input 
            type="text" 
            placeholder="First Name" 
            name="fname"
            className="input input-bordered w-full max-w-xs justify-center" 
            value={formData.fname}
            onChange={handleInputChange}
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            name="lname"
            className="input input-bordered w-full max-w-xs justify-center" 
            value={formData.lname}
            onChange={handleInputChange}
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            className="input input-bordered w-full max-w-xs justify-center" 
            value={formData.email}
            onChange={handleInputChange}
          />

          <input 
            type="password" 
            placeholder="Password" 
            name="password"
            className="input input-bordered w-full max-w-xs justify-center" 
            value={formData.password}
            onChange={handleInputChange}
          />

          <button className="btn justify-center" onClick={handleFormSubmit}>Sign Up</button>

          { signupResult === "fail" && (
            <div className="alert alert-danger" role="alert">
               Signup failed!
            </div>
          )} 
          
        </div>
      )
    }