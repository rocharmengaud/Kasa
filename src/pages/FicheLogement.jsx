import React from 'react';
import { useParams } from 'react-router-dom';

import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

import LogementsData from '../data/Logements.json';

import '../styles/FicheLogement.css';

export default function FicheLogement() {
  const { id } = useParams();

  // on se positionne sur l'id de la page actuelle
  const currentLogement = LogementsData.find((el) => {
    return el.id === id;
  });

  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        <Carousel slides={currentLogement.pictures} />
        <div className="logement-content lg:bg-white lg:pt-6 lg:relative">
          <div className="logement-info flex flex-col gap-1">
            <div className="logement-title font-semibold">{currentLogement.title}</div>
            <div className="logement-location">{currentLogement.location}</div>
          </div>
          <Tags data={currentLogement.tags} />
          <Rating {...currentLogement.host} />
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
