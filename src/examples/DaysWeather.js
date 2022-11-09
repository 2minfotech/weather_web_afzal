import React from 'react';

import './Footer.css';

export function DaysWeather({ day, degree, image }) {
    
    return(

        <div className="calend">
            <div className="Day"><p>{day}</p></div>
            <div className="cloud">
                <p>{degree}°</p>
                <div className='first_image'>{image}</div>
            </div>
        </div>

    );
}