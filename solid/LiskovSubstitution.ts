/**
 * subclass should be interchangeable with their base class
 * There are two classic example:
 * - throw exception: kiwi can not fly
 * - change the behavior of parent class - square vs rectangle
 * - To fix:
 * - make the original class (Shape, Bird) generic too all shapes
 * - make a specific class for each unique method
 */

class Bird {
	fly() {
		console.log('bird can fly');
	}
}

class Pigeon extends Bird {
	fly() {
		console.log('pigeon can fly');
	}
}

// * kiwi can not interchangeable for bird => liskov subsitution principle violated
class Kiwi extends Bird {
	fly() {
		// !console.error('kiwi can not fly');
		throw Error('kiwi can not fly');
	}
}

// * To fix the violation we create a new BirdCanFly class
class BirdCanFly extends Bird {
	// all flying bird extend from here

	fly() {}
}

// ============TEST=====
const pigeon = new Pigeon();
pigeon.fly();
const kiwi = new Kiwi();
kiwi.fly();
