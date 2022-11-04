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

  // on se positionne sur l'id de la page actuelle
  const LogementsUpdate = LogementsData.filter((el) => {
    return el.id === id;
  });
  console.log(LogementsUpdate);

  const dataLogement = LogementsUpdate;

  return (
    <div className="content lg:px-32 px-6">
      <Navbar />
      <Carousel slides={LogementsUpdate[0].pictures} />
      {dataLogement.map((logement, index) => {
        return (
          <div className="logement-content lg:bg-white lg:pt-6 lg:relative" key={index}>
            <div className="logement-info flex flex-col gap-1">
              <div className="logement-title font-semibold">{logement.title}</div>
              <div className="logement-location">{logement.location}</div>
            </div>
            <Tags />
            {/* ici on se positionne ce qui a été filtré dans LogementsUpdate et on lui donne .host pour rentrer dans le tableau correspondant */}
            {/* on écris data ici car le composant rating prends en propriété data */}
            <Rating data={LogementsUpdate[0].host} />
          </div>
        );
      })}
    </div>
  );
}
