import { TodoManager } from './TodoManager.js';

const todoManager = new TodoManager();
const contentElem = document.querySelector('.content');

contentElem.innerHTML = `
<h2>${todoManager.getTitle()}</h2>
`;