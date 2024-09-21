import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Work</li>
        <li>Get In Touch</li>
      </ul>
      <div className="social-icons">
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-behance"></i>
        <i className="fa fa-twitter"></i>
      </div>
    </nav>
  );
};

export default Navbar;
