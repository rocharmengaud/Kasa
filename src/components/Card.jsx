import React from 'react';

import '../styles/Card.css';

export default function Card(props) {
  return (
    <>
      {/* ici on écris props.data car on à choisi d'écrire le mot data dans home.jsx ligne 18 */}
      {props.data.map((value, index) => (
        <div className="card mb-6 ml-6 mr-6 overflow-hidden border-2 rounded-lg" key={value.id}>
          <div className="card-image max-h-full">
            <img src={value.cover} alt="" />
          </div>
          <div className="card-info p-4">
            <div className="card-title">{value.title}</div>
            <div className="card-location">{value.location}</div>
          </div>
        </div>
      ))}
    </>
  );
}
