import { useState } from "react";
// import '../App.css'

export default function Login(){
    const [formData, setFormData] = useState({email: '', password: ''})
    const [loginResult, setLoginResult ] = useState("")

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      const handleFormSubmit = async(e) => {
        e.preventDefault()
        const query = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        if( !query.ok ) {
          setLoginResult("fail")
          console.log(query)
        } else {
          setLoginResult("success")
          const result = await query.json()
          if( result.status === "success" && result.payload ){
            window.location.href = "/"
          }
        }
      }

    // async function login(e){
    //     e.preventDefault();
    //     const query = await fetch('/api/user/auth', {
    //         method: 'POST',
    //         body: JSON.stringify(formData),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const result = await query.json()
    //     // implement logic for success or fail
    // }

    return (
        <>
            <div className="loginForm justify-center">
                <h1>Login Below:</h1>
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
                <button className="btn justify-center" onClick={handleFormSubmit}>Login</button>
                <a className="link justify-center" href="/signup">Don't Have an Account? Click Here to Sign Up Instead!</a>
            </div>

            { loginResult === "fail" && (
            <div className="alert alert-danger" role="alert">
              Login failed!
            </div>
            )}
            { loginResult === "success" && (
            <div className="alert alert-success" role="alert">
              Login successful!
            </div> 
            )}
        </>
    )


}