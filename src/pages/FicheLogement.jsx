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

  // on se positionne sur l'id de la page actuelle
  const LogementID = LogementsData.filter((el) => {
    return el.id === id;
  });

  const dataLogement = LogementID;

  return (
    <div className="content lg:px-32 px-6">
      <Navbar />
      <Carousel slides={LogementID[0].pictures} />
      {dataLogement.map((logement, index) => {
        return (
          <div className="logement-content lg:bg-white lg:pt-6 lg:relative" key={index}>
            <div className="logement-info flex flex-col gap-1">
              <div className="logement-title font-semibold">{logement.title}</div>
              <div className="logement-location">{logement.location}</div>
            </div>
            <Tags data={LogementID[0].tags} />
            {/* ici on se positionne ce qui a été filtré dans LogementID et on lui donne .host pour rentrer dans le tableau correspondant */}
            {/* on écris data ici car le composant rating prends en propriété data */}
            <Rating data={LogementID[0].host} />
          </div>
        );
      })}
    </div>
  );
}
