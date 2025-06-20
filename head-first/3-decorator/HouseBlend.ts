import { Beverage } from './Beverage';

/**
 * concrete beverage
 */
export class HouseBlend extends Beverage {
	constructor() {
		super();
		this.description = 'House blend coffee';
	}
	cost() {
		return 0.98;
	}
}
