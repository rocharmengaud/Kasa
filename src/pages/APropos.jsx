import React from 'react';

import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Apropos from '../data/Apropos.json';

import Mountain from '../assets/mountain.png';

export default function APropos() {
  return (
    <>
      <div className="content lg:px-32 px-6 pb-10">
        <Navbar />
        <Banner imgSrc={Mountain} />
        <div className="dropdowns-container flex flex-col gap-6">
          {Apropos.map((propos, index) => (
            <Dropdown title={propos.title} key={propos.id}>
              {/* ici on passe des children au composant dropdown */}
              {/* c'est pour ca que le composant s'ouvre et se ferme en deux balises */}
              {propos.description}
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
