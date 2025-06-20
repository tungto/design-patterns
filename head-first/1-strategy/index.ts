import { CantSwim } from './CantSwim';
import { DecoyDuck } from './DecoyDuck';
import { FlyRocketPowered } from './FlyRocketPowered';
import { FlyWithWings } from './FlyWithWings';

const decoy = new DecoyDuck();
decoy.display();
console.log('==================');

const flyWithWings = new FlyWithWings();
const cantSwim = new CantSwim();
decoy.setFlyBehavior(flyWithWings);
decoy.setSwimBehavior(cantSwim);

decoy.display();

const flyRocket = new FlyRocketPowered();
decoy.setFlyBehavior(flyRocket);

console.log('=============');
decoy.display();
