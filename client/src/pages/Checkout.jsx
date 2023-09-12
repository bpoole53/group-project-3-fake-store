import React from "react";
import countries from '../assets/countries.json'
import states from '../assets/states.json'
import '../App.css'
import { useState } from 'react'

const defaultInfo = {
	email: "",
	fname: "",
	lname: "",
	streetAdd: "",
	optional: "",
	city: "",
	postalcode: "",
	phone: "",
	cardnum: "",
	cardnam: "",
	expire: "",
	securitycode: "",
}

export default function Checkout() {

	const [ alertState, setalertState ] = useState({ type: "", message: "" })
	const [ userData, setUserData ] = useState(defaultInfo)


	function handleInputChange (e) {
    e.preventDefault()
    setUserData({...userData, [e.target.name]: e.target.value})
  }


	function submitForm (e) {
		e.preventDefault()
    let errorsFound = false;
    
    Object.keys(userData).forEach(key => {
      if( userData[key].length === 0 ) 
      errorsFound = true
    })

     if (errorsFound === true ) {
      setalertState({ type: "alert-warning", message: "All form fields must be filled out!"})
    }
	}

	return(
		<>
			{alertState.type.length > 0 && (
        <div className="alert">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				<span>{alertState.message}</span>
			</div>
      )}  
			<div className="flex flex-col w-full lg:flex-row">
				<div className="checkout-form-holder grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
				<form>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Contact Info</span>
        </label>
        <input type="text" placeholder="Email Address" name="email" className="input input-bordered input-md w-full max-w-xs" onChange={handleInputChange}/>
      </div>
      <div className='shipping-info-holder'>
        <h2>Shipping Address</h2>
        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Country</option>
                {countries.map( country => (
                  <option key={country.name} value={country.code}>{country.name}</option>
                ))}
          </select><br></br>
        <input type="text" placeholder="First Name" name="fname" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInputChange}/> 
        <input type="text" placeholder="Last Name" name="lname" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInputChange}/><br></br>
        <input type="text" placeholder="Street Address" name="streetAdd" className="input input-bordered input-md w-full max-w-xs" onChange={handleInputChange}/>
        <input type="text" placeholder="Apartment, suite, etc. (optional)" name="optional" className="input input-bordered input-md w-full max-w-xs" onChange={handleInputChange}/><br></br>
        <input type="text" placeholder="City" name="city" className="input input-bordered input-md w-full max-w-xs" onChange={handleInputChange}/>
        <select className="select select-bordered w-full max-w-xs" name="state">
            <option disabled selected>State</option>
                {states.map( state => (
                  <option key={state.name} value={state.code}>{state.name}</option>
                ))}
          </select>
        <input type="text" placeholder="Postal Code" name="postalcode" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInputChange}/>
        <input type="text" placeholder="Phone" name="phone" className="input input-bordered input-sm w-full max-w-xs" onChange={handleInputChange}/>
     </div>
     <div className="billing-info-holder">
        <h2>Billing Information</h2>
        <input 
          type="checkbox" 
          className="billing"
          ></input>

        <label htmlFor="billing">Same as Shipping Information</label><br></br>
        <div className='billing-form-hide'> 
          <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Country</option>
                  {countries.map( country => (
                    <option key={country.name} value={country.code}>{country.name}</option>
                  ))}
            </select><br></br>
          <input type="text" placeholder="First Name" name="fname" className="input input-bordered input-sm w-full max-w-xs" /> 
          <input type="text" placeholder="Last Name" name="lname" className="input input-bordered input-sm w-full max-w-xs" /><br></br>
          <input type="text" placeholder="Street Address" name="streetAdd" className="input input-bordered input-md w-full max-w-xs" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" name="optional" className="input input-bordered input-md w-full max-w-xs" /><br></br>
          <input type="text" placeholder="City" name="city" className="input input-bordered input-md w-full max-w-xs" />
          <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>State</option>
                  {states.map( state => (
                    <option key={state.name} value={state.code}>{state.name}</option>
                  ))}
            </select>
          <input type="text" placeholder="Postal Code" name="postalcode" className="input input-bordered input-sm w-full max-w-xs" />
          <input type="text" placeholder="Phone" name="phone" className="input input-bordered input-sm w-full max-w-xs" />  
        </div>   
     </div>
    </form>
				</div> 
				<div className="divider lg:divider-horizontal"></div> 
				<div className="payment-form-holder grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
				<div className="payment-form">
					<h1>Payment</h1>
					<h3>We never store your credit card number and your payment is secure.</h3>
					<input type="text" placeholder="Card Number" name="cardnum" className="input input-bordered input-md w-full max-w-xs" onChange={handleInputChange}/>
					<input type="text" placeholder="Name on Card" name="cardnam" className="input input-bordered input-md w-full max-w-xs" onChange={handleInputChange}/><br></br>
					<input type="text" placeholder="Expiration Date" name="expire" className="input input-bordered input-md w-half max-w-xs" onChange={handleInputChange}/>
					<input type="text" placeholder="Security Code" name="securitycode" className="input input-bordered input-md w-half max-w-xs" onChange={handleInputChange}/><br></br>
					<button className="btn" onClick={submitForm}>Pay Now</button>
				</div>
				</div>
			</div>

		</>
	)

}
