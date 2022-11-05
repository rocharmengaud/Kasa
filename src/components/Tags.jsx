import React from 'react';

import '../styles/Tags.css';

export default function Tags({ data }) {
  return (
    <>
      <div className="tag-content pt-4">
        <div className="tag max-w-fit rounded-xl flex gap-1 text-center border">
          {data.map((value, index) => {
            return (
              <div className="tag-text1 px-8 text-white" key={index}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
