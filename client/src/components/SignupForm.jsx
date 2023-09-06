
export default function SignupForm () {



  return (
    <div className="justify-center">
      <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
      <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
      <button className="btn">Sign Up</button>
    </div>
  )
}