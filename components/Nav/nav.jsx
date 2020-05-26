import React, { useState, useContext } from 'react';
import { Context } from "../../lib/helpers/reducer"    
import Switch from '../Switch/Switch';
import style from '../../sass/main.scss';


const Nav = () => {
    const [value, setValue] = useState(false)
    const { store: { theme }, dispatch } = useContext(Context);

    return (
      <nav className="nav flex-row">
        <style jsx>{style}</style>
        <div className="nav__container flex-row">
          <div className="nav__container-link">About</div>
          <div className="nav__container-link">Store</div>
        </div>
        <div className="nav__container flex-row">
          <div onClick={() => dispatch({ type: 'SET_THEME' })} className="btn">
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