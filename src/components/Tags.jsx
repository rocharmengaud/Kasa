import React from 'react';

import '../styles/Tags.css';

export default function Tags({ data }) {
  return (
    <>
      <div className="tag-content flex pt-4">
        <div className="flex gap-1 text-center border">
          {data.map((value, index) => {
            return (
              <div className="tag tag-text1 rounded-xl px-8 text-white" key={index}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
