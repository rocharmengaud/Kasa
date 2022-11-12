import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

import LogementsData from '../data/Logements.json';

export default function FicheLogement() {
  const { id } = useParams();

  // on se positionne sur l'id de la page actuelle
  const currentLogement = LogementsData.find((el) => {
    return el.id === id;
  });

  // Condition pour renvoyer l'utilisateur sur la page 404 si le logement n'as pas été trouvé
  // L'ordre de cette condition ici est importante pour déterminer si le logement a été trouvé
  // On la place donc ligne ici ligne 24 avant le return ligne 28
  if (!currentLogement) {
    return <Navigate to="/error-404" />;
  }

  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        <Carousel slides={currentLogement.pictures} />
        <div className="logement-content lg:bg-white lg:pt-6 lg:relative">
          <div className="logement-info flex flex-col gap-1">
            <div className="logement-title font-semibold text-[#ff6060] text-[17px]">{currentLogement.title}</div>
            <div className="logement-location text-[#ff6060]">{currentLogement.location}</div>
          </div>
          <Tags data={currentLogement.tags} />
          <Rating name={currentLogement.host.name} picture={currentLogement.host.picture} rating={currentLogement.rating} />
        </div>
        <div className="dropdowns-container lg:flex-row lg:pt-6 lg:justify-between lg:gap-6 flex flex-col gap-6 pb-6">
          <div className="dropdown-container w-full">
            <Dropdown title={'Description'}>{currentLogement.description}</Dropdown>
          </div>
          <div className="dropdown-container w-full">
            <Dropdown title={'Equipements'}>
              <div className="flex flex-col">
                {currentLogement.equipments.map((equipment, index) => {
                  return <span key={index}>{equipment}</span>;
                })}
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
