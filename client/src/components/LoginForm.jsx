
export default function LoginForm () {

  return (
    <div className="justify-center">
      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
      <button className="btn">Login</button>
      <a className="link" href="/signup">Don't Have an Account? Click Here to Sign Up Instead!</a>
    </div>
  )
}