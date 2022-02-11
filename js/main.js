import { TodoManager } from './TodoManager.js';

const todoManager = new TodoManager();
const contentElem = document.querySelector('.content');

contentElem.innerHTML = todoManager.getName();
