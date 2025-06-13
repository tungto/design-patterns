import { Observer } from './IObserver';
import { Subject } from './ISubject';

/**
 * THIS IS CONCRETE SUBJECT
 */
export class WeatherData implements Subject {
	private observers: Observer[];
	private temperature: number;
	private humidity: number;
	private pressure: number;

	// public WeatherData(temp: number, humidity: number, pressure: number) {
	// 	this.temperature = temp;
	// 	this.humidity = humidity;
	// 	this.pressure = pressure;
	// 	this.notifyObservers();
	// }

	public registerObserver(observer: Observer): void {
		this.observers.push(observer);
	}
	public removeObserver(o: Observer): void {
		this.observers.filter((item) => item !== o);
	}
	public notifyObservers(): void {
		for (const observer of this.observers) {
			observer.update(this.temperature, this.humidity, this.pressure);
		}
	}

	// call this when data update?
	public setMeasurements(
		temp: number,
		humidity: number,
		pressure: number
	): void {
		this.temperature = temp;
		this.humidity = humidity;
		this.pressure = pressure;
		this.notifyObservers();
	}

	public measurementsChanged() {
		this.notifyObservers();
	}

	public getTemperature(): number {
		return this.temperature;
	}
	// public getHumi(): number {
	// 	return this.temperature;
	// }
	// public getTemperature(): number {
	// 	return this.temperature;
	// }
}
