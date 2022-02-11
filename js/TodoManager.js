
export class TodoManager {

	constructor(document) {

		this.document = document;

		this.todoManagerElem = this.document.querySelector('.todoManager');
		this.titleElem = this.document.querySelector('h2');
		this.buttonElem = this.todoManagerElem.querySelector('button');

		this.title = 'Todo Manager';
		this.buttonText = 'Add Todo';
		this.todos = [];

		this.initialize();
	}
	
	initialize() {
		this.todoManagerElem.style.backgroundColor = 'tan';
		this.titleElem.innerHTML = this.title;
		this.buttonElem.innerHTML = this.buttonText;
		this.buttonElem.addEventListener('click', this.handleButtonClick);
	}

	handleButtonClick = () => {
		this.todos.push('added');
		console.log(this.todos);
	}


}