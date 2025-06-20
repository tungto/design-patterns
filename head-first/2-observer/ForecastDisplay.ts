import { DisplayElement } from './types/IDisplayElement';
import { Observer } from './types/IObserver';
import { WeatherData } from './WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
	private currentPressure = 29.92;
	private lastPressure = 0;
	private weatherData: WeatherData;

	constructor(weatherData: WeatherData) {
		this.weatherData = weatherData;
		this.weatherData.registerObserver(this);
	}
	update(temperature: number, humidity: number, pressure: number): void {
		this.lastPressure = this.currentPressure;
		this.currentPressure = pressure;

		this.display();
	}
	public display(): void {
		console.log('Forecast: ');
		if (this.currentPressure > this.lastPressure) {
			console.log('Improving weather on the way!');
		} else if (this.currentPressure == this.lastPressure) {
			console.log('More of the same');
		} else if (this.currentPressure < this.lastPressure) {
			console.log('Watch out for cooler, rainy weather');
		}
	}
}
