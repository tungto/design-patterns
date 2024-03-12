/**
 * Entities should open for extension but close for modification
 * Imagine we have 3 shapes and need to calculate are
 * Instead of modify Geometry each time we want to add shape
 * We can create Shape interface with area method and enforcing every shape extend it
 */

class Triangle {
	public base: number;
	public height: number;
	constructor(base: number, height: number) {
		this.base = base;
		this.height = height;
	}
}

class Rectangle {
	public width: number;
	public height: number;
	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}
}

class Circle {
	public radius: number;
	constructor(radius: number) {
		this.radius = radius;
	}
}

class Geometry {
	public area(shape: Triangle | Rectangle) {
		if (shape instanceof Triangle) {
			return shape.base * shape.height * 0.5;
		}

		if (shape instanceof Circle) {
			return shape.radius * Math.PI;
		}

		if (shape instanceof Rectangle) {
			return shape.width * shape.height;
		}
	}
}

/**
 * create Shape interface with getArea, instead of modify Geometry
 */

interface Shape {
	getArea(): number;
}

class Circle1 implements Shape {
	public radius: number;
	constructor(radius: number) {
		this.radius = radius;
	}
	getArea(): number {
		return this.radius * Math.PI;
	}
}
