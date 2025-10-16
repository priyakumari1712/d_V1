import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import nav_bg from "/nav_back.svg";
import responsive_nav_bg from "/responsive-Nav.svg";
import logo from "../assets/photos/Logo_Dsquared_White.png"
import searchIcon from "/search-2-line.svg"

 

function NavBar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleProducts = () => setIsProductsOpen((v) => !v)
  const openProducts = () => setIsProductsOpen(true)
  const closeProducts = () => setIsProductsOpen(false)
  
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v)
  return (
    <header className="nav">
      <div className="nav-container">
        {/* Desktop Background */}
        <img src={nav_bg} alt="" className="desktop-bg" />
        {/* Mobile Background */}
        <img src={responsive_nav_bg} alt="" className="mobile-bg" />
        
        <div className="nav_elements_container">
          <div className="navlogo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

            <div className="menu_one">
              <div className="products-dropdown-container" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
                <a href="">Products</a>
                {isProductsOpen && (
                  <div className="products-dropdown">
                    <div className="dropdown-item">
                      <span className="item-number">00</span>
                      <div className="item-content">
                        <h3>All Products</h3>
                        <p>Explore our entire lineup</p>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <span className="item-number">01</span>
                      <div className="item-content">
                        <h3>Prepare</h3>
                        <p>Cleaning, decontamination, polishing, surface preparation</p>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <span className="item-number">02</span>
                      <div className="item-content">
                        <h3>Protect</h3>
                        <p>C.QUARTZ D.QUARTZ coatings</p>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <span className="item-number">03</span>
                      <div className="item-content">
                        <h3>PPF</h3>
                        <p>immortal film, software & accessories</p>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <span className="item-number">04</span>
                      <div className="item-content">
                        <h3>Maintain</h3>
                        <p>Maintenance washing, sealants, coating rejuvenation</p>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <span className="item-number">05</span>
                      <div className="item-content">
                        <h3>Accessories</h3>
                        <p>Microfibers, polishing pads, brushes, merch</p>
                      </div>
                    </div>
                    <div className="search-container">
                      <input type="text" placeholder="Search..." className="search-input" />
                      <button className="search-button">
                        <img src={searchIcon} alt="Search" width="24" height="24" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/about">About</Link>
              <a href="">Support</a>
              <a href="">Contact</a>
            </div>

            <div className="menu_two">
                <a href="">Find the Distributor</a>
            </div>

            <div className="menu_three">
                <a href="">Find installer</a>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div 
              className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>

        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="products-dropdown-container">
            <a href="" onClick={toggleProducts}>Products</a>
            {isProductsOpen && (
              <div className="products-dropdown">
                <div className="dropdown-item">
                  <span className="item-number">00</span>
                  <div className="item-content">
                    <h3>All Products</h3>
                    <p>Explore our entire lineup</p>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">01</span>
                  <div className="item-content">
                    <h3>Prepare</h3>
                    <p>Cleaning, decontamination, polishing, surface preparation</p>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">02</span>
                  <div className="item-content">
                    <h3>Protect</h3>
                    <p>C.QUARTZ D.QUARTZ coatings</p>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">03</span>
                  <div className="item-content">
                    <h3>PPF</h3>
                    <p>immortal film, software & accessories</p>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">04</span>
                  <div className="item-content">
                    <h3>Maintain</h3>
                    <p>Maintenance washing, sealants, coating rejuvenation</p>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span className="item-number">05</span>
                  <div className="item-content">
                    <h3>Accessories</h3>
                    <p>Microfibers, polishing pads, brushes, merch</p>
                  </div>
                </div>
                <div className="search-container">
                  <input type="text" placeholder="Search..." className="search-input" />
                  <button className="search-button">
                    <img src={searchIcon} alt="Search" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          <a href="" onClick={toggleMobileMenu}>Support</a>
          <a href="" onClick={toggleMobileMenu}>Contact</a>
          <a href="" onClick={toggleMobileMenu}>Find the Distributor</a>
          <a href="" onClick={toggleMobileMenu}>Find installer</a>
        </div>
      </div>
    </header>
  )
}

export default NavBar


