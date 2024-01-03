// import { apiCity, apiCoordinate } from './api.js';

// export default async function weatherAPI(word) {
//   console.log(word);

//   try {
//     const resByCity = await apiCity.get(word);

//     const lat = resByCity.data[0].lat
//     const lon = resByCity.data[0].lon
//     const API_KEY = "989b992b948476e9040c493d992c13ff"

//     const resByCoordinate = await apiCoordinate.get(
//       `?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}&units=metric`);

//     const weatherList = resByCoordinate.data.list

//     return weatherList;

//   } catch (error) {
//     console.error("Error fetching weather data:", error.message);
//   }
// }

