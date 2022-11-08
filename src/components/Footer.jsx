import React from 'react';
import bnw_logo from '../assets/kasa logo bnw.png';

export default function Footer() {
  return (
    <footer className="w-full pt-6 bg-black">
      <div className="kasa-logo flex justify-center pb-4">
        <img className="kasa-logo w-36 h-12" src={bnw_logo} alt="Kasa logo"></img>
      </div>
      <div className="copyright pb-6 text-center text-white">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}
