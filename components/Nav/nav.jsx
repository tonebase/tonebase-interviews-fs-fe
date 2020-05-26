import React from 'react';
import style from '../../sass/main.scss';


const Nav = () => {
    return (
        <nav className="nav flex-row">
            <style jsx>{style}</style>
            <div className="nav__container flex-row">
                <div className="nav__container-link">About</div>
                <div className="nav__container-link">Store</div>
            </div>
            <div className="nav__container flex-row">
                <div className="nav__container-link">Gmail</div>
                <div className="nav__container-link">Images </div>
                <div className="nav__container-link">Stan</div>
            </div>
            
        </nav>
    )
}

export default Nav