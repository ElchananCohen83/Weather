import React, { useState, useEffect } from 'react';
import DayOfWeek from './DayCard.jsx';
import '../App.css';

export default function WeatherCard({ weatherList, city }) {
    const [isFilled, setIsFilled] = useState(false);

    const [formattedDate, setFormattedDate] = useState(null);
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!weatherList) {
                return;
            }
            const dt = new Date(weatherList[0].dt * 1000);

            setFormattedDate(dt.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
            setDescription(weatherList[0].weather[0].description);
            setTemp(Math.round(weatherList[0].main.temp) + "°");
            setIcon(weatherList[0].weather[0].icon)
        };

        fetchData();
    }, [weatherList]);

    const handleClick = async () => {
        setIsFilled((prevIsFilled) => !prevIsFilled);

        // Wait for setIsFilled to complete and get the updated value
        // const updatedIsFilled =  setIsFilled;

        // if (updatedIsFilled){
        //     const existingCities = JSON.parse(localStorage.getItem("citys")) || [];
        //     existingCities.push(city);
        //     localStorage.setItem("citys", JSON.stringify(existingCities));
        //     updatedIsFilled = null
        // }else{
        //     localStorage.removeItem("citys", city)
        // }
    };


    return (
        <div className='weather_card'>
            {weatherList ? (
                <>
                    <div className="formattedDate-heart">
                        <p className='formattedDate'>{formattedDate}</p>
                        {/* <svg
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
                        </svg> */}
                    </div>

                    {/* <h1 className='city'>{city}</h1> */}
                    <h1 className='city'>{weatherList ? city : 'No Data Available'}</h1>


                    <div className='degrees-image'>
                        <img
                            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt={icon}
                        />

                        <div className="degrees-description">
                            <p className='degrees'>{temp}</p>
                            <p className='description'>{description}</p>
                        </div>
                    </div>

                    <div className='day'>
                        {(() => {
                            const elements = [];
                            for (let i = 0; i < weatherList.length; i += 8) {
                                elements.push(
                                    <DayOfWeek
                                        key={i}
                                        dayOfWeek={new Date(weatherList[i].dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                                        temp_min={Math.round(weatherList[i].main.temp_min)}
                                        temp_max={Math.round(weatherList[i].main.temp_max)}
                                    />
                                );
                            }
                            return elements;
                        })()}
                    </div>
                </>
            ) : (
                // Display loading indicator
                <p>Loading...</p>
            )}
        </div>
    );
}