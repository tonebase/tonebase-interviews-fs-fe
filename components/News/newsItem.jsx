import React, { useContext } from 'react'
import themeSwitcher from '../../lib/functions/themeSwitcher';
import { Context } from '../../lib/helpers/store'
import style from '../../sass/main.scss';


const NewsItem = props => {
    const { store: { theme } } = useContext(Context)

    return (
        <a href={props.url} style={{ color: `${themeSwitcher(theme, "#FFFFFF", "#000")}`}} className="news-item flex-row">
            <style jsx>{style}</style>
            <div className="news-item__content__info flex-col">
                <div className="news-item__content__info-title">{props.title}</div>
                <div className="news-item__content__info-source">{props.source.name}</div>
            </div>
            <div className="news-item__content-container">
                <img 
                    src={props.urlToImage} 
                    alt="Article image"
                    className="news-item__content-container-img"
                />
            </div>
        </a>
    )
}

export default NewsItem