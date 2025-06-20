import { Observer } from './types/IObserver';
import { Subject } from './types/ISubject';

/**
 * THIS IS CONCRETE SUBJECT
 */
export class WeatherData implements Subject {
	private observers: Observer[];
	private temperature: number;
	private humidity: number;
	private pressure: number;

	constructor() {
		this.pressure = 0;
		this.temperature = 0;
		this.humidity = 0;
		this.observers = [];
	}

	public registerObserver(observer: Observer): void {
		this.observers.push(observer);
	}
	public removeObserver(o: Observer): void {
		this.observers = this.observers.filter((item) => item !== o);
	}
	public notifyObservers(): void {
		for (const observer of this.observers) {
			observer.update(this.temperature, this.humidity, this.pressure);
		}
	}

	public measurementsChanged() {
		this.notifyObservers();
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

	public getTemperature(): number {
		return this.temperature;
	}

	public getHumidity(): number {
		return this.humidity;
	}

	public getPressure(): number {
		return this.pressure;
	}
}
