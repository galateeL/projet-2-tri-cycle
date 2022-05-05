import React, { useState } from "react";
import "./CssComponents/dropDownFilter.css";

export default function Dropdown() {
  const [dropdown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropdown);
  };
  return (
    <div className="dropdown">
      <bouton className="filter-menu" type="button" onClick={showDropDown}>
        Filtrer
      </bouton>
      <div className="dropdown-menu">
        {dropdown ? (
          <ul className="list-filter">
            <li> Matière </li>
            <li> Matière </li>
            <li> Matière </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
