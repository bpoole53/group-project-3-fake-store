

function Navigation() {



  
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
          <li>
            <a href="/products">Shop</a>
            <ul className="p-2">
              <li><a>Category 1</a></li>
              <li><a>Category 2</a></li>
            </ul>
          </li>
          <li><input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /></li>
          <a className="btn searchBtn" type="submit" href="/products">Search</a>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl" href="/">Hull & Deck
      
      </a>
    </div>
    <div className="navbar-center lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href="/about">About</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Shop</summary>
            <ul className="p-2">
              <li><a>Category 1</a></li>
              <li><a>Category 2</a></li>
            </ul>
          </details>
        </li>
        <li><input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" /></li>
        <a className="btn searchBtn" type="submit" href="/products">Search</a>
      </ul>
    </div>
    <div className="navbar-end">
      <a href="/cart" className="cartNav">Cart</a>
      <a className="btn" href="/login">Login</a>
    </div>
   </div>
   </>
  )
}
export default Navigation;
