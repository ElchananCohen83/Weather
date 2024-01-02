import axios from 'axios';

const apiCity = axios.create({
  baseURL: import.meta.env.VITE_URL_API_CITY,
});

const apiLatAndLon = axios.create({
    baseURL: import.meta.env.VITE_URL_API_LAT_LON,
  });

export {apiCity, apiLatAndLon};