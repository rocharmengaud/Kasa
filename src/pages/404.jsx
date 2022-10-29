import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/404.css';

export default function Error404() {
  return (
    <>
      <Navbar />
      <div className="big-text text-7xl pt-32 font-bold text-center">404</div>
      <div className="big-text pt-4 text-xl font-bold text-center">Oups! La page que vous demandez n'existe pas.</div>
      <div className="big-text hover:underline-offset-2 hover:underline pt-24 text-lg font-normal text-center">Retourner sur la page d'accueil</div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
