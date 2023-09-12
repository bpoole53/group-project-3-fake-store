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
      <footer className="footer footer-center bg-base-200">
        <nav className="grid grid-flow-col">
          <a className="link link-hover" href="/about">About us</a> <span/>
        </nav> 
        <nav><img className="grid grid=flow-col" src="/StyleShopLogo.png" heighth = "20%" width= "20%"/></nav>
        <nav>
          
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Dark Mode</span> 
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
          <p>Copyright © 2023 - All right reserved by Style Shop Inc</p>
        </aside>
      </footer>
  )
}


