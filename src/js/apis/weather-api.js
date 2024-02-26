import { appState } from '../states';

const key = '9a88ef47cc534a56aeb211837241202';

function createURL(endpoint, location, days) {
  if (endpoint === 'current') {
    return `https://api.weatherapi.com/v1/${endpoint}.json?key=${key}&q=${location}&aqi=no`;
  } else if (endpoint === 'forecast') {
    if (!days) days = 1;
    return `https://api.weatherapi.com/v1/${endpoint}.json?key=${key}&q=${location}&days=${days}&aqi=no`;
  }
}

export async function fetchWeatherData(endpoint, location, days) {
  try {
    let url = createURL(endpoint, location, days);

    let response = await fetch(url);
    if (!response.ok) {      
      const errorObject = await response.json();
      const errorMessage = errorObject.error.message || 'An unknown error has occurred';

      return errorMessage;
    } else if (response.ok) {
      appState.activeLocation = location;
    }
  
    const dataObject = await response.json();

    return dataObject;
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
  }
}

// > -------------------------------------------------------------- 

// 💭 WITHOUT ASYNC 

// 💭 function fetchWeatherData(endpoint, location) {
// 💭   let url = null;
// 💭   if (endpoint === 'current') {
// 💭     url = createCurrentURL(location);
// 💭   } else if (endpoint === 'forecast') {
// 💭     url = createForecastURL(location);
// 💭   }

// 💭   return fetch(url)
// 💭     .then((response) => {
// 💭       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
// 💭       const dataObject = response.json();
// 💭       return dataObject;
// 💭     })
// 💭     .catch((error) => console.error(`Error fetching weather data: ${error}`));
// 💭 }