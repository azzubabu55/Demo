import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#portfolio">Portfolio </a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <h1 className="logo"> <a href="Asif.cv-3.pdf" download className="btn"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>Download PDF</a></h1>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;