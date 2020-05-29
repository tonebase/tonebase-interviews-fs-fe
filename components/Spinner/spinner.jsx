import React from "react";
import style from "../../sass/main.scss";

// JSX and SCSS taken from a lesson in this course: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"

const Spinner = () => (
  <div className="spinner-overlay">
    <style jsx>{style}</style>
    <div className="spinner-container" />
  </div>
);

export default Spinner;
