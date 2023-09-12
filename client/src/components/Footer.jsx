import { useState, useEffect } from 'react'

export default function Footer () {

  const [ theme, setTheme ] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const currentTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [theme]);


  return (
   <footer className="footer footer-center p-2 bg-base-100 text-base-content rounded">
    <nav className=" grid-flow-row-dense gap-2">
      <a className="link link-hover center" href="/about">About us</a> <span/>
    </nav>
    <nav>
      
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Dark Mode&nbsp;&nbsp; </span> 
        <input 
          type="checkbox" 
          className="toggle" 
          checked={theme === "light" ? false === "dark" : true } 
          onChange={handleThemeChange}
        />
      </label>
    </div>

    </nav> 
    <aside>
    <img className="footerimg" src="/Hull&DeckBlue.png" heighth = "30%" width= "30%" border-radius ="75px" />
      <p>Copyright © 2023 - All right reserved by Hull & Deck Inc</p>
    </aside>
   </footer>
  )
}


