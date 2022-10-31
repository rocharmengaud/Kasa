import React from 'react';

import '../styles/Card.css';

export default function Card(props) {
  const pictureId = props.data.filter((element) => {
    return element.id;
  });

  console.log(pictureId);

  return (
    <>
      {/* ici on écris props.data car on à choisi d'écrire le mot data dans home.jsx ligne 18 */}
      {props.data.map((value, index) => (
        <div className="card mb-6 overflow-hidden border-2 border-gray-200 rounded-lg" key={value.id}>
          <div className="card-image h-50 w-full">
            <img src={value.cover} alt={value.title} />
          </div>
          <div className="card-info lg:bg-white p-4">
            <div className="card-title pb-2 leading-5">{value.title}</div>
            <div className="card-location font-semibold">{value.location}</div>
          </div>
        </div>
      ))}
    </>
  );
}
