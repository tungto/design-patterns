import { Beverage, SIZES } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Latte extends CondimentDecorator {
	constructor(private beverage: Beverage) {
		super();
	}
	cost() {
		return this.beverage.cost() + 0.3;
	}
	getDescription(): string {
		return (
			this.beverage.getDescription() + ', Latte' + this.beverage.getSize()
		);
	}
}
