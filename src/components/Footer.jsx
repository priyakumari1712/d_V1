import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <span className="footer__lead">Begin your journey</span>
        <div className="footer__ctaButtons">
          <a href="#" className="footer__ctaBtn footer__ctaBtn--primary">Find an Installer</a>
          <a href="#" className="footer__ctaBtn">Find a Distributor</a>
        </div>
      </div>

      <div className="footer__container">
        <div className="footer__watermark" aria-hidden="true">DSQUARED</div>
        <div className="footer__brand">
          <div className="footer__logo">DSQUARED</div>
          <p className="footer__tag">Detailing. Protection. Performance.</p>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__title">Products</h4>
            <a href="#" className="footer__link">Prepare</a>
            <a href="#" className="footer__link">Protect</a>
            <a href="#" className="footer__link">PPF</a>
            <a href="#" className="footer__link">Maintain</a>
            <a href="#" className="footer__link">Accessories</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Company</h4>
            <a href="#" className="footer__link">About</a>
            <a href="#" className="footer__link">Support</a>
            <a href="#" className="footer__link">Contact</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Support</h4>
            <a href="#" className="footer__link">Instructions, Tips & Guides</a>
            <a href="#" className="footer__link">Downloads</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Find</h4>
            <a href="#" className="footer__link">Find an Installer</a>
            <a href="#" className="footer__link">Find a Distributor</a>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} DSQUARED. All rights reserved</span>
          <div className="footer__legal">
            <a href="#" className="footer__small">Terms of use</a>
            <a href="#" className="footer__small">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


