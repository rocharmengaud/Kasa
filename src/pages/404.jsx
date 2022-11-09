import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/404.css';

export default function Error404() {
  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        <div className="big-text text-7xl pt-32 font-black text-center lg:text-[14rem]">404</div>
        <div className="big-text pt-6 text-xl text-center">Oups! La page que vous demandez n'existe pas.</div>
        <div className="big-text hover:underline-offset-2 hover:underline font-extralight lg:pt-36 pt-24 text-center">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        <div className="footer absolute bottom-0 left-0 right-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
