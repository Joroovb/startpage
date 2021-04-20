// Toevoeg knop
var addButton = document.getElementById("add-button");
addButton.addEventListener("click",  addToDoItem);

// Nieuwe todos toevoegen
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function addToDoItem() {
	var entryText = toDoEntryBox.value;
	newToDoItem(entryText);
	const allItems = loadList(); // als we tijd hebben
  allItems.push(entryText); // als we tijd hebben
  saveList(allItems); // als we tijd hebben
	document.getElementById("todo-adder").reset();
}

function newToDoItem(entryText) {
	var toDoItem = document.createElement("li");
	var toDoText = document.createTextNode(entryText);
	toDoItem.appendChild(toDoText);

	toDoList.appendChild(toDoItem);
	toDoItem.addEventListener("dblclick", removeTodoItem);
}

// Item verwijderen
function removeTodoItem() {
	this.parentNode.removeChild(this)
	const allItems = loadList().filter( item => item !== this.innerHTML ); // Als we tijd hebben
  saveList(allItems); // Als we tijd hebben
}

// Als we tijd hebben ///

function saveList(allItems) {
  const itemStorageKey = 'todos';
  localStorage.setItem(itemStorageKey, JSON.stringify(allItems));
}

function loadList() {
  const itemStorageKey = 'todos';
  const storedData = localStorage.getItem(itemStorageKey) || '[]';
  return JSON.parse(storedData);
}

function initializeList() {
  const allItems = loadList();
  allItems.forEach((item) => {
		newToDoItem(item);
	})
}

initializeList();