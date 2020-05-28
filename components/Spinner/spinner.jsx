import React from "react";
import style from "../../sass/main.scss";

const Spinner = () => (
  <div className="spinner-overlay">
    <style jsx>{style}</style>
    <div className="spinner-container" />
  </div>
);

export default Spinner;
