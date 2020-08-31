// Design: https://dribbble.com/shots/5035559-Cookie-Pop-up-Overlay-UI -->
// Icon from flaticon -->

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [styleDirection, setStyleDirection] = useState("row");

  const mouseHandler = (styleValue) => {
    if (styleValue === "row") {
      setStyleDirection("row-reverse");
    } else if (styleValue === "row-reverse") {
      setStyleDirection("row");
    }
  };

  return (
    <div className="popup">
      <img src="https://image.flaticon.com/icons/svg/2078/2078580.svg" alt="" />
      <h2>Hola!, This site uses cookies!</h2>
      <p>
        Cookies allow the website publisher to doo useful things like find out
        whether the computer (and probably its user) has visited the site
        before!
      </p>
      <div className="btn-container" style={{ flexDirection: styleDirection }}>
        <button className="btn">Sweet... cookies!</button>
        <button
          className="btn ghost"
          onMouseOver={() => mouseHandler(styleDirection)}
        >
          No. Not for me!
          <span>Don't click me</span>
        </button>
      </div>
    </div>
  );
}
