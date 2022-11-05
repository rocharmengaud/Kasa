import React from 'react';

import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Apropos from '../data/Apropos.json';

import '../styles/Apropos.css';

export default function APropos() {
  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        <Dropdown data={Apropos[0]} />
      </div>
      <Footer />
    </>
  );
}
