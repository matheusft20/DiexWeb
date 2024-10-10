// src/components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.h1
          className="logo"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          DevSites
        </motion.h1>
        <ul className="nav-menu">
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="/">Home</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="/orcamento">Orçamento</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
