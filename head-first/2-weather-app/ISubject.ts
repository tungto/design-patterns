import { Observer } from './IObserver';

export interface Subject {
	registerObserver(observer: Observer): void;
	removeObserver(observer: Observer): void;
	notifyObservers(): void;
}
