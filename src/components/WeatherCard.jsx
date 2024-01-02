import React, { useState } from 'react';
import Day from './DayCard';
import '../App.css';

export default function Weather() {
    const [isFilled, setIsFilled] = useState(false);
    const city = "Tel Aviv";
    const degrees = "38°";

    const handleClick = () => {
        setIsFilled((prevIsFilled) => !prevIsFilled);
    };

    return (
        <div className='weather_card'>

            <div className="city-heart">
                <h1 className='city'>{city}</h1>
                <svg
                    className={`feather feather-heart ${isFilled ? 'heart-filled' : 'heart'}`}
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    width="24"
                    onClick={handleClick}
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </div>

            <div className='degrees-image'>
                <img src="../../assets/public/weather.png" alt="image weather" style={{ width: "100px" }} />

                <div className="degrees-description">
                    <p className='degrees'>{degrees}</p>
                    <p className='description'>description</p>
                </div>
            </div>
            <div className='day'>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>

        </div>
    );
}
