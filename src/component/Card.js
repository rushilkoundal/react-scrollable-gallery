import { Avatar } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import React from 'react'

function Card(props) {
    return (
        <>
            {props.details.map((value, index) => (
                <header key={index} className='card' style={{ backgroundSize: "cover", backgroundImage: `url(${value.image})`, backgroundPosition: "center center" }}>
                    <div className="card__description">
                        <div className="avatar"><Avatar /></div>
                        <div className="card__content">
                            <h3>{value.author}</h3>
                            <p className="banner-description">{value.likes}</p>
                        </div>
                        <FileDownloadOutlinedIcon />
                    </div>
                    {/* <div className="banner-fadeBottom" /> */}
                </header>
            ))}
        </>
    )
}

export default Card