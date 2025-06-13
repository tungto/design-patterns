import { Observer } from './IObserver';
import { Subject } from './ISubject';

export class CurrentConditionsDisplay implements Observer {
	private temperature: number;
	private humidity: number;
	private pressure: number;

	constructor(private weatherData: Subject) {
		weatherData.registerObserver(this);
	}

	public update(
		temperature: number,
		humidity: number,
		pressure: number
	): void {
		this.humidity = humidity;
		this.temperature = temperature;
		this.pressure;
	}

	public display(): void {
		console.log(
			`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`
		);
	}
}
