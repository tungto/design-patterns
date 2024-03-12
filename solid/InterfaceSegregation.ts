/**
 * Issue: Large interface: implement class should define all the methods, some methods might not be use or apply
 * This is not good
 * Fix: break large interface to smaller, more targeted interfaces
 *
 */

// all class implements this interface must define all the methods event if won't use or apply to that
interface ShapeInterface {
	calculateArea();
	calculateVolume();
}

class Square implements ShapeInterface {
	calculateArea() {
		// some logic
	}
	calculateVolume() {
		// some logic
	}
}

class Cylinder implements ShapeInterface {
	calculateArea() {
		// some logic
	}
	calculateVolume() {
		// some logic
	}
}

interface AreaInterface {}
class Square1 implements AreaInterface {
	// don't need to define calculate volume
	calculateArea() {}
}

interface VolumeInterface {}
class cylinder implements AreaInterface, VolumeInterface {
	calculateArea() {
		// some logic
	}
	calculateVolume() {
		// some logic
	}
}
