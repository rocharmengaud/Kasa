import React from 'react';
import { useParams } from 'react-router-dom';

export default function FicheLogement() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Placeholder logement</h1>
    </div>
  );
}
