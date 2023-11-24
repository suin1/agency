import React from "react";

const AgencyMenu = ({ isVisible }) => {
  return (
    <menu className={`global-nav ${isVisible ? "visible" : ""}`}>
      <li>
        <a href="#">home</a>
      </li>
      <li>
        <a href="#">about</a>
      </li>
      <li>
        <a href="#">products</a>
      </li>
      <li>
        <a href="#">contact</a>
      </li>
    </menu>
  );
};

export default AgencyMenu;
