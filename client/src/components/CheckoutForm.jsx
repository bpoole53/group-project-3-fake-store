import countries from '../assets/countries.json'
import states from '../assets/states.json'

export default function CheckoutForm () {


  return (
    <form>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Contact Info</span>
        </label>
        <input type="text" placeholder="Email Address" className="input input-bordered input-lg w-full max-w-xs" />
      </div>
      <div className='shipping-info-holder'>
        <h2>Shipping Address</h2>
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
     <div className="billing-info-holder">
        <h2>Billing Information</h2>
        <input 
          type="checkbox" 
          name="billing"
          ></input>

        <label htmlFor="billing">Same as Shipping Information</label><br></br>
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
     <div className='card-info-holder'>
      <h1>Payment</h1>
      <h3>We never store your credit card number and your payment is secure.</h3>


     </div>
    </form>
  )
}