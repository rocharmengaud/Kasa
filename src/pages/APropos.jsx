import React from 'react';

import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Apropos from '../data/Apropos.json';

import '../styles/Apropos.css';

export default function APropos() {
  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        <Banner />
        <div className="dropdowns-container flex flex-col gap-6">
          {Apropos.map((apropo, index) => (
            <Dropdown title={apropo.title} key={apropo.id}>
              {/* ici on passe des children au composant dropdown */}
              {/* c'est pour ca que le composant s'ouvre et se ferme en deux balises */}
              {apropo.description}
            </Dropdown>
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
