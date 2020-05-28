import React from 'react'
import style from '../../sass/main.scss';


const NewsItem = props => {
    console.log(props)
    return (
        <div className="news-item flex-row">
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
            
        </div>
    )
}

export default NewsItem