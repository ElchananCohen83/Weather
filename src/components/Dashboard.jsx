import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import WeatherCard from "./WeatherCard";
import { apiCity, apiCoordinate } from '../services/api.js';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Dashboard() {
    const [weatherList, setWeatherList] = useState([]);
    const [searchWord, setSearchWord] = useState();

    useEffect(() => {
        if (searchWord) {
            fetchData(searchWord);
        }
    }, [searchWord]);

    const fetchData = async (word) => {
        try {
            const resByCity = await apiCity.get(word);

            const lat = resByCity.data[0]?.lat;
            const lon = resByCity.data[0]?.lon;

            if (lat && lon) {
                const resByCoordinate = await apiCoordinate.get(
                    `?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}&units=metric`
                );
                
                setWeatherList(resByCoordinate.data.list);
                console.log("weatherList", weatherList);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
            // Handle errors gracefully, e.g., set an error state
        }
    };

    return (
        <div>
            <Search onDataReceivedSearch={setSearchWord} />
            <div>
                {Array.isArray(weatherList) && weatherList.length > 0 &&
                    <WeatherCard
                        weatherList={weatherList}
                        city={searchWord}
                    />}
            </div>
        </div>
    );
}
