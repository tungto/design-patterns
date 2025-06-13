import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { WeatherData } from './WeatherData';

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(25, 65, 1013);
weatherData.setMeasurements(28, 70, 1009);
