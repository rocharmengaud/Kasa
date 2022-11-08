import React from 'react';

import '../styles/Tags.css';

export default function Tags({ data }) {
  return (
    <>
      <div className="tag-content flex pt-4">
        <div className="flex flex-wrap gap-3 text-center">
          {data.map((value, index) => {
            return (
              <div className="tag tag-text1 px-6 text-white rounded-md" key={index}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
