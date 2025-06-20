import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { ForecastDisplay } from './ForecastDisplay';
import { StatisticsDisplay } from './StatisticsDisplay';
import { WeatherData } from './WeatherData';

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);

weatherData.setMeasurements(25, 65, 1013);
weatherData.setMeasurements(28, 70, 1009);

weatherData.removeObserver(forecastDisplay);
weatherData.setMeasurements(62, 90, 28.1);
