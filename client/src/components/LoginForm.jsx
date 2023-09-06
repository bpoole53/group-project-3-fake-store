
export default function LoginForm () {

  return (
    <div className="justify-center">
      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs justify-center" />
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs justify-center" />
      <button className="btn justify-center">Login</button>
      <a className="link justify-center" href="/signup">Don't Have an Account? Click Here to Sign Up Instead!</a>
    </div>
  )
}