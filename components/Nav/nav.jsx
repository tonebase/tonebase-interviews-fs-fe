import React, { useState, useReducer } from 'react';
import Switch from '../Switch/Switch';
import { reducer, setTheme, INITIAL_STATE } from '../../lib/helpers/reducer'
import style from '../../sass/main.scss';


const Nav = () => {
    const [value, setValue] = useState(false)
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { theme } = state;

    return (
      <nav className="nav flex-row">
        <style jsx>{style}</style>
        <div className="nav__container flex-row">
          <div className="nav__container-link">About</div>
          <div className="nav__container-link">Store</div>
        </div>
        <div className="nav__container flex-row">
          <div onClick={(e) => dispatch(setTheme(theme))} className="btn">
            Burn my eyes
          </div>
          <Switch
            className="switch__container"
            isOn={value}
            onColor="#EF476F"
            handleToggle={() => setValue(!value)}
          />
          <div className="nav__container-link">Gmail</div>
          <div className="nav__container-link">Images </div>
          <div className="nav__container-link">Stan</div>
        </div>
      </nav>
    );
}

export default Nav