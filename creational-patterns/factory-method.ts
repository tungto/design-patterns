class Knife {
	type = '';
}

interface Button {
	render: () => any;
	onClick: () => any;
}

class WindowsButton implements Button {
	render() {
		return;
	}
	onClick() {}
}

class HTMLButton implements Button {
	render() {
		return;
	}
	onClick() {}
}

// here we render object base on
// this is creator class
class Dialog implements Button {
	render() {
		return;
	}
	onClick() {}
	// factory method
	createButton() {}
}

// window dialog => windows button
class WindowsDialog implements Dialog {
	render() {
		return;
	}
	onClick() {}
	createButton() {
		return new WindowsButton();
	}
}

// web dialog => html button
class WebDialog implements Dialog {
	render() {
		return;
	}
	onClick() {}
	createButton() {
		return new HTMLButton();
	}
}
