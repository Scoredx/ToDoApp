//get obj from HTML
const TodoContainer = document.querySelectorAll('.todo_container')[0];
const TodoAdd = document.querySelectorAll('.todo_plus')[0];

 //new task button
TodoAdd.addEventListener('click', () => {
  TodoContainer.appendChild(genTodoItem());
});
 
//Button action
function genTodoItem() {

	//Container + Text
	let cont = document.createElement("div");
	cont.className = "todo_item";
	let text = document.createElement("span");
	text.className = "todo_item_text";
	var input = window.prompt("Enter text: ");
	text.textContent = input;

	//Controls 
	let controls = document.createElement('span');
	controls.className = 'todo_controls';
	let edit = document.createElement('img');
	edit.src = "./assets/icons/more.svg";
	edit.onclick = () => (text.textContent = prompt('Edit: ', text.textContent));
	let remove = document.createElement('img');
	remove.src ="./assets/icons/check.svg";
	remove.onclick = () => TodoContainer.removeChild(cont);
	controls.appendChild(edit);
	controls.appendChild(remove);
	cont.appendChild(text);
	cont.appendChild(controls);
	return cont;
}