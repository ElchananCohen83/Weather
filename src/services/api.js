import axios from 'axios';

const apiCity = axios.create({
  baseURL: import.meta.env.VITE_URL_API_CITY,
});

const apiCoordinate  = axios.create({
    baseURL: import.meta.env.VITE_URL_API_COORDINATE ,
  });

export {apiCity, apiCoordinate};