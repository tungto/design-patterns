import { Beverage, SIZES } from './Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Mocha extends CondimentDecorator {
	constructor(private beverage: Beverage) {
		super();
	}
	cost() {
		let cost = this.beverage.cost();

		switch (this.beverage.getSize()) {
			case SIZES.tall:
				cost += 0.7;
				break;
			case SIZES.grande:
				cost += 0.9;
				break;
			case SIZES.venti:
				cost += 1;
				break;
		}

		return Math.round(cost * 100) / 100;
	}
	getDescription(): string {
		return `${this.getSizeLabel()} ${this.description}`;
	}

	getSize() {
		return this.beverage.getSize();
	}

	private getSizeLabel(): string {
		switch (this.getSize()) {
			case SIZES.tall:
				return 'Tall';
			case SIZES.grande:
				return 'Grande';
			case SIZES.venti:
				return 'Venti';
			default:
				return '';
		}
	}
}
