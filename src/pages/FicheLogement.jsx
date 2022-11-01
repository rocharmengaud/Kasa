import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import LogementsData from '../data/Logements.json';

import '../styles/FicheLogement.css';

export default function FicheLogement() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="content lg:px-32 px-6">
      <Navbar />
      <Carousel slides={LogementsData} />
      <div className="card-info lg:bg-white pt-6">
        <div className="logement-title pb-2 font-semibold leading-5">Titre du logement</div>
        <div className="logement-location">location</div>
        <Tags />
        <Rating />
      </div>
    </div>
  );
}
