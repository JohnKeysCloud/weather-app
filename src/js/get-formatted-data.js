import { appState, unitState } from './states'; 

function getWeatherForecastHourlyObject(todayForecast, nextNineHoursArray) {
  const weatherForecastHourlyObject = {};

  nextNineHoursArray.forEach((relevantHour, index) => {
    const extractableData = todayForecast[relevantHour];

    const extractedHour = extractableData.time.split(' ')[1];
    const extractedIconSource = extractableData.condition.icon;
    const extractedTemperature =
      appState.activeScale === 'farenheit'
        ? `${extractableData.temp_f} °F`
        : `${extractableData.temp_c} °C`;

    const hourObject = {
      hour: extractedHour,
      iconSource: extractedIconSource,
      temperature: extractedTemperature,
    };

    weatherForecastHourlyObject[index] = hourObject;
  });

  return weatherForecastHourlyObject;
}

// ? Why nine? Because 3, 6, 9.
function getNextNineHours() {
  const hours = [];
  const nextHour = new Date().getHours() + 1;
  let incrementable = nextHour;

  for (let i = 0; i < 9; i++) {
    if (incrementable === 24) {
      incrementable = 0;
    }
    hours.push(incrementable++);
  }

  return hours;
}

export function getFormattedData(forecastWeatherData) {
  let formattedData = {};
  
  appState.activeScale = unitState.active.unit;

  const currentWeather = forecastWeatherData.current;
  const forecastArray = forecastWeatherData.forecast.forecastday;

  const extractedWeatherInfo = {
    iconSource: currentWeather.condition.icon,
    description: currentWeather.condition.text,
    location: forecastWeatherData.location.name,
    date: forecastWeatherData.location.localtime.split(' ')[0],
    time: forecastWeatherData.location.localtime.split(' ')[1],
    temperature:
      appState.activeScale === 'farenheit'
        ? `${currentWeather.temp_f} °F`
        : `${currentWeather.temp_c} °C`,
  };
  formattedData.weatherInfo = extractedWeatherInfo;

  const extractedWeatherDetails = {
    feelsLike:
      appState.activeScale === 'farenheit'
        ? `${currentWeather.feelslike_f} °F`
        : `${currentWeather.feelslike_c} °C`,
    humidity: `${currentWeather.humidity}%`,
    chanceOfRain: `${forecastArray[0].day.daily_chance_of_rain}%`,
    windSpeed: `${currentWeather.wind_mph}mph`,
  };
  formattedData.weatherDetails = extractedWeatherDetails;

  const extractedForecastDaily = {
    today: {
      iconSource: forecastArray[0].day.condition.icon,
      averageTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[0].day.avgtemp_f} °F`
          : ` ${forecastArray[0].day.avgtemp_c} °C`,
      highTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[0].day.maxtemp_f} °F`
          : ` ${forecastArray[0].day.maxtemp_c} °C`,
      lowTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[0].day.mintemp_f} °F`
          : ` ${forecastArray[0].day.mintemp_c} °C`,
    },
    tomorrow: {
      iconSource: forecastArray[1].day.condition.icon,
      averageTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[1].day.avgtemp_f} °F`
          : ` ${forecastArray[1].day.avgtemp_c} °C`,
      highTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[1].day.maxtemp_f} °F`
          : ` ${forecastArray[1].day.maxtemp_c} °C`,
      lowTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[1].day.mintemp_f} °F`
          : ` ${forecastArray[1].day.mintemp_c} °C`,
    },
    overmorrow: {
      iconSource: forecastArray[2].day.condition.icon,
      averageTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[2].day.avgtemp_f} °F`
          : ` ${forecastArray[2].day.avgtemp_c} °C`,
      highTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[2].day.maxtemp_f} °F`
          : ` ${forecastArray[2].day.maxtemp_c} °C`,
      lowTemperature:
        appState.activeScale === 'farenheit'
          ? ` ${forecastArray[2].day.mintemp_f} °F`
          : ` ${forecastArray[2].day.mintemp_c} °C`,
    },
  };
  formattedData.weatherForecastDaily = extractedForecastDaily;

  const todayForecast = forecastArray[0].hour;
  const nextNineHoursArray = getNextNineHours(todayForecast);
  const extractedForecastHourly = getWeatherForecastHourlyObject(
    todayForecast,
    nextNineHoursArray
  );
  formattedData.weatherForecastHourly = extractedForecastHourly;

  return formattedData;
}