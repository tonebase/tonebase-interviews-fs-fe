import React, { useState, useContext } from 'react';
import { Context } from "../../lib/helpers/reducer"    
import Switch from '../Switch/switch';
import themeSwitcher from '../../lib/functions/themeSwitcher'
import style from '../../sass/main.scss';

const Nav = () => {
    const [value, setValue] = useState(false)
    // destructured theme value from context to allow for cleaner code
    const { store: { theme }, dispatch } = useContext(Context);

    return (
      <nav className="nav flex-row">
        <style jsx>{style}</style>
        <div className="nav__container flex-row">
          <a
            href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
            className="nav__container-link"
          >
            About
          </a>
          <a
            href="https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US"
            className="nav__container-link"
          >
            Store
          </a>
        </div>
        <div className="nav__container flex-row">
          <div className="nav__container-theme">
            Switch to {themeSwitcher(theme, "light", "dark")} mode &rarr;
          </div>
          <Switch
            className="switch__container"
            isOn={value}
            onColor="#06D6A0"
            handleToggle={() => {
              // dispatch an action to the theme reducer to switch between dark and light themes based on the current state
              dispatch({ type: "SET_THEME" });
              // changes value of current state of the toggle between 'true' and 'false'
              setValue(!value);
            }}
          />
          <div className="nav__container-link">Gmail</div>
          <div className="nav__container-link">Images </div>
          <div className="nav__container__photo">
            <img
              src="../../static/images/Screen Shot 2020-05-26 at 6.46.14 PM.png"
              alt="Profile picture"
              className="nav__container__photo-img"
            />
          </div>
        </div>
      </nav>
    );
}

export default Nav