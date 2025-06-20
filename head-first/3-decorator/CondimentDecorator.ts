import { Beverage, SIZES } from './Beverage';

export abstract class CondimentDecorator extends Beverage {
	abstract getDescription(): string;
}
