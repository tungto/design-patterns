import { Beverage, SIZES } from './Beverage';
import { HouseBlend } from './HouseBlend';
import { Milk } from './Milk';
import { Mocha } from './Mocha';

let beverage: Beverage = new HouseBlend();

beverage = new Milk(beverage);

// double mocha soy latte with whip
beverage = new Mocha(beverage);
beverage = new Mocha(beverage);

//. double mocha
beverage.setSize(SIZES.tall);
console.log(beverage.getDescription());
console.log(beverage.cost());
