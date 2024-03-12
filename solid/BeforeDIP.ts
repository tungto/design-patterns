class TelegramApi1 {
	start() {
		console.log('You are connected to Telegram API!');
	}

	messageTo(targetId: number, message: string) {
		console.log(message + ' sent to ' + targetId + ' by Telegram!');
	}
}

class WhatsappApi1 {
	setup() {
		console.log('You are connected to Whatsapp API!');
	}

	pushMessage(message: string, targetId: number) {
		console.log(message + ' sent to ' + targetId + ' by Whatsapp!');
	}
}

class SignalApi1 {
	open() {
		console.log('You are connected to Signal API!');
	}

	postMessage(params: { id: number; text: string }) {
		console.log(params.text + ' sent to ' + params.id + ' by Signal!');
	}
}

class Messenger1 {
	private api: TelegramApi1 | WhatsappApi1 | SignalApi1;

	constructor(api: TelegramApi1 | WhatsappApi1 | SignalApi1) {
		this.api = api;
	}

	sendMessage(targetId: number, message: string) {
		if (this.api instanceof TelegramApi1) {
			this.api.start();
		} else if (this.api instanceof WhatsappApi1) {
			this.api.setup();
			this.api.pushMessage(message, targetId);
		} else {
			this.api.open();
			this.api.postMessage({ id: targetId, text: message });
		}
	}
}
