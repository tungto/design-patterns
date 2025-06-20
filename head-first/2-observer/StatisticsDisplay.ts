import { DisplayElement } from './types/IDisplayElement';
import { Observer } from './types/IObserver';
import { WeatherData } from './WeatherData';

export class StatisticsDisplay implements Observer, DisplayElement {
	private maxTemp: number;
	private minTemp: number;
	private tempSum: number;
	private numReadings: number;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		this.weatherData.registerObserver(this);
		this.maxTemp = 0;
		this.minTemp = 0;
		this.tempSum = 0;
		this.numReadings = 0;
	}
	update(temp: number, humidity: number, pressure: number): void {
		this.tempSum += temp;
		this.numReadings++;

		if (temp > this.maxTemp) {
			this.maxTemp = temp;
		}

		if (temp < this.minTemp) {
			this.minTemp = temp;
		}

		this.display();
	}
	display(): void {
		console.log(
			'Avg/Max/Min temperature = ' +
				this.tempSum / this.numReadings +
				'/' +
				this.maxTemp +
				'/' +
				this.minTemp
		);
	}
}
