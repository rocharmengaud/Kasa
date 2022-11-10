import React from 'react';
import logo from '../assets/kasa logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-container flex items-center justify-between w-full py-6">
      <img className="kasa-logo w-36 h-12" src={logo} alt="Kasa logo"></img>
      <div className="nav-items lg:gap-20 flex gap-4">
        <div className="link hover:underline-offset-2 hover:underline lg:normal-case lg:text-base text-sm font-semibold uppercase text-[#ff6060]">
          <Link to="/">Accueil</Link>
        </div>
        <div className="link hover:underline-offset-2 hover:underline lg:normal-case lg:text-base text-sm font-semibold uppercase text-[#ff6060]">
          <Link to="/APropos">A propos</Link>
        </div>
      </div>
    </nav>
  );
}
