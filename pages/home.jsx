import React, { useState } from 'react';
import Nav from '../components/Nav/nav'
import style from '../sass/main.scss';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="home">
            <Nav />
            <style jsx>{style}</style>
            <style jsx global>{`
                html {
                    font-size: 62.5%; //set default font size to 10px and allow for responsive design with rems
                    background-color: rgb(53, 54, 58);
                    font-family: Lato, sans-serif;
                    color: #FFFFFF;

                }
            `}
            </style>
            <div className="home__content">
                <h1 className="home__content__logo">Google</h1>
                <form className="home__content__form">
                    <input type="text" className="home__content__form__search" placeholder="Search Google or type a url" />
                    <div className="buttons">
                        <button className="buttons__btn-1 btn">Google Search</button>
                        <button className="buttons__btn-2 btn">I'm Feeling Lucky</button>
                    </div>
                    
                </form>

            </div>
        </div>
    )
}

export default Home
