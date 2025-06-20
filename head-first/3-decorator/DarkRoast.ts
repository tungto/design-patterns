import { Beverage } from './Beverage';

/**
 * concrete beverage
 */
export class DarkRoast extends Beverage {
	constructor() {
		super();
		this.description = 'Dark Roast Coffee';
	}
	cost() {
		return 0.98;
	}
}
