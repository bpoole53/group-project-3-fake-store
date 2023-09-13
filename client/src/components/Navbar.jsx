import { useAppContext } from '../utils/AppContext';

function Navigation() {
  const { authenticated } = useAppContext();
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Clear the cookie
    document.cookie = 'auth-cookie=; expires=Thu, 01 Jan 1950 00:00:00 UTC; path=/;';
    // setIsLoggedIn(false);

    // Redirect the user to the homepage upon logout
    window.location.href = '/';
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/about">About</a></li>
              <li>Shop</li>
              <li>
                <a className="btn " href="/products">Shop</a>
                <ul className="menu menu-sm dropdown-content p-2">
                  <li><a href='/small-water-vessels'>Small water vessels</a></li>
                  <li><a href='/large-water-vessels'>Large water vessels</a></li>
                </ul>
              </li> 
              <li><input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /></li>
              <a className="btn searchBtn" type="submit" href="/products">Search</a>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl center" href="/">Hull & Deck
            <img className="image" src="/Hull&DeckBlu.png" heighth = "5%" width= "5%" border-image= 'none' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/about">About</a></li>
            <li tabIndex={0}>
              <details>
                <summary><a href="/products">Shop</a></summary>
                <ul className="p-2">
                  <li><a href="/products/small-water-vessels">Small water vessels</a></li>
                  <li><a href="/products/large-water-vessels">Large water vessels</a></li>
                </ul>
              </details>
            </li>
            <li><input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /></li>
            <a className="btn searchBtn" type="submit" href="/products">Search</a>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/cart" className="cartNav">Cart</a>
          {authenticated ? (
            <a onClick={handleLogout} className="btn">Logout</a>
          ) : (
          <a className="btn" href="/login">Login</a>
          )}
        </div>
      </div>
    </>
  )
}

export default Navigation;
