
export class TodoManager {
	constructor(document) {
		this.document = document;
		this.todoManagerElem = this.document.querySelector('.todoManager');
		this.titleElem = this.document.querySelector('h2');
		this.title = 'Todo Manager';
		this.initialize();
	}
	initialize() {
		this.todoManagerElem.style.backgroundColor = 'tan';
		this.titleElem.innerHTML = this.title;
	}
}