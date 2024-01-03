import React, { useState, useEffect } from 'react';
import weatherAPI from "../services/weatherAPI.js"
import DayOfWeek from './DayCard.jsx';
import '../App.css';

export default function WeatherCard() {
    const [isFilled, setIsFilled] = useState(false);

    const [dt, setDt] = useState(null);
    const [city, setCity] = useState(null);
    const [weatherList, setWeatherList] = useState(null);
    const [formattedDate, setFormattedDate] = useState(null);
    const [temp, setTemp] = useState(null);
    const [description, setDescriptiona] = useState(null);
    const [icon, setIcon] = useState(null);

    const [temp_min, setTemp_min] = useState(null);
    const [temp_max, setTemp_max] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null);


    const handleClick = async () => {
        setIsFilled((prevIsFilled) => !prevIsFilled);
    };

    useEffect(() => {
        const fetchData = async () => {
            const weatherList = await weatherAPI();
            const dt = new Date(weatherList[0].dt * 1000);
            setDt(new Date(weatherList[0].dt * 1000))

            setCity("Tel Aviv")
            setFormattedDate(dt.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
            setDescriptiona(weatherList[0].weather[0].description);
            setTemp(Math.round(weatherList[0].main.temp) + "°");
            setIcon(weatherList[0].weather[0].icon)
            setWeatherList(weatherList);

            setDayOfWeek(dt.toLocaleDateString('en-US', { weekday: 'short' }));
            setTemp_min(Math.round(weatherList[0].main.temp_min));
            setTemp_max(Math.round(weatherList[0].main.temp_max));

        };

        if (isFilled) {
            fetchData();
        }
    }, [isFilled]);

    return (
        <div className='weather_card'>
            <div className="formattedDate-heart">
                <p className='formattedDate'>{formattedDate}</p>
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

            <h1 className='city'>{city}</h1>

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
                {weatherList && (
                    (() => {
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
                    })()
                )}
            </div>


        </div>
    );
}