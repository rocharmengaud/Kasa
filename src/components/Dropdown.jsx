import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function Dropdown(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn bg-[#ff6060] flex items-center justify-between px-4 py-1 text-white rounded-md"
        onClick={() => setIsActive(!isActive)}
      >
        {props.title}
        <RiArrowDropDownLine className="dropdown-arrow text-[40px] cursor-pointer" />
      </div>
      {/* .children ici est reconnu l43 fichelogement entre les deux balises dropdown*/}
      {isActive && <div className="dropdown-value rounded-b-md px-4 py-2 bg-gray-200">{props.children}</div>}
    </div>
  );
}
