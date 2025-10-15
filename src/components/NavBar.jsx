import React, { useState } from 'react'
import './NavBar.css'
import nav_bg from "/nav_back.svg";
import logo from "../assets/photos/Logo_Dsquared_White.png"

 

function NavBar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleProducts = () => setIsProductsOpen((v) => !v)
  const openProducts = () => setIsProductsOpen(true)
  const closeProducts = () => setIsProductsOpen(false)
  return (
    <header className="nav">
      <div className="nav-container">
        <img src={nav_bg} alt="" />
        <div className="nav_elements_container">
          <div className="navlogo">
                <img src={logo} alt="" />
          </div>

            <div className="menu_one">
              <a href="">Products</a>
              <a href="">About</a>
              <a href="">Support</a>
              <a href="">Contact</a>
            </div>

            <div className="menu_two">
                <a href="">Find the Distributor</a>
            </div>

            <div className="menu_three">
                <a href="">Find installer</a>
            </div>

        </div>
      </div>
    </header>
  )
}

export default NavBar


