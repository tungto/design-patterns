import { DisplayElement } from './types/IDisplayElement';
import { Observer } from './types/IObserver';
import { Subject } from './types/ISubject';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
	private temperature: number;
	private humidity: number;
	private pressure: number;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
		this.temperature = 0;
		this.humidity = 0;
		this.pressure = 0;
	}

	public update(
		temperature: number,
		humidity: number,
		pressure: number
	): void {
		this.humidity = humidity;
		this.temperature = temperature;
		// we can get specific data we need from weather data instead of through params
		this.pressure = this.weatherData.getPressure();
		this.display();
	}

	public display(): void {
		console.log(
			`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity and pressure: ${this.pressure}`
		);
	}
}
