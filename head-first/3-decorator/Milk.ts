import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from './Beverage';

export class Milk extends CondimentDecorator {
	constructor(private beverage: Beverage) {
		super();
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Milk';
	}

	cost() {
		return this.beverage.cost() + 0.1;
	}
}
