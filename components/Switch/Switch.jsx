import React, { Fragment } from 'react';
import style from "../../sass/main.scss";

const Switch = ({isOn, handleToggle, onColor}) => {
  // Followed tutorial on 'https://upmostly.com/tutorials/build-a-react-switch-toggle-component' to build the component
  return (
    <Fragment>
      <style jsx>{style}</style>
      <input
        checked={isOn}
        className="react-switch-checkbox"
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </Fragment>
  );
}

export default Switch