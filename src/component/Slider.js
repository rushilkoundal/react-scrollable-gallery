import React, { useState } from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Avatar } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import cardData from './CardData'
import './Slider.css'
import './Card.css'

function Slider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === cardData.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? cardData.length - 1 : current - 1)
    }

    if (!Array.isArray(cardData) || cardData.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>
            <div className="slider__header">
                <h1>Gallery</h1>
                <button onClick={nextSlide}>Shuffle <ShuffleRoundedIcon /></button>
            </div>
            <div className="slider__cards">
                {cardData.map((value, index) => (  
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current || (
                            <header key={index} className='card' style={{width: `${value.width}px`, backgroundSize: "cover", backgroundImage: `url(${value.image})`, backgroundPosition: "center center" }}>
                                <div className="card__description">
                                    <div className="avatar"><Avatar /></div>
                                    <div className="card__content">
                                        <h3>{value.author}</h3>
                                        <p className="banner-description"><FavoriteRoundedIcon /> {value.likes}</p>
                                    </div>
                                    <FileDownloadOutlinedIcon style={{cursor: 'pointer'}}/>
                                </div>
                                {/* <div className="banner-fadeBottom" /> */}
                            </header>
                        )}
                    </div>
                ))}
            </div>
            <div className="slider__buttons">
                <button onClick={prevSlide}><ArrowBackIosRoundedIcon /></button>
                <button onClick={nextSlide}><ArrowForwardIosRoundedIcon /></button>
            </div>
        </div>
    )
}

export default Slider