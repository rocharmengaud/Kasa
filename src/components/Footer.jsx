import React from 'react';
import bnw_logo from '../assets/kasa logo bnw.png';

export default function Footer() {
  return (
    <footer>
      <div className="kasa-logo flex justify-center pb-2">
        <img className="kasa-logo w-36 h-12" src={bnw_logo} alt="Kasa logo"></img>
      </div>
      <div className="copyright text-center">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}
