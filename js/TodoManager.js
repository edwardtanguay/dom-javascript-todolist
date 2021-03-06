
export class TodoManager {

	constructor(document) {

		this.document = document;

		this.todoManagerElem = this.document.querySelector('.todoManager');
		this.titleElem = this.document.querySelector('h2');
		this.buttonElem = this.todoManagerElem.querySelector('button');
		this.inputElem = this.todoManagerElem.querySelector('input');
		this.todosElem = this.todoManagerElem.querySelector('.todos');

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

		this.inputElem.focus();
	}

	handleButtonClick = () => {
		const inputValue = this.inputElem.value;
		this.todos.push(inputValue);
		this.displayTodos();
		this.inputElem.value = '';
		this.inputElem.focus();
	}

	displayTodos() {
		this.todosElem.innerHTML = `
			${this.todos.map(todo => {
				return '<div>' + todo + '</div>';
			}).join('')}	
		`;
	}


}