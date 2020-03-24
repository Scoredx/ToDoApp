// variables
const TodoBox = document.querySelectorAll('.todo_container')[0];
const TodoAdd = document.querySelectorAll('.todo_plus')[0];
 
//new task button
TodoAdd.addEventListener('click', () => {
  TodoBox.appendChild(genTodoItem());
});
 
function genTodoItem() {

  //Container + Text
  let cont = document.createElement("div");
  cont.className = "todo_item";
  let text = document.createElement("span");
  text.className = "todo_text";
  var newtext = (text.textContent = prompt('Type here! ', text.textContent))
  text.textContent = newtext;


  //Buttons
  let controls = document.createElement('span');
  controls.className = 'todo_controls';
  let edit = document.createElement('img');
  edit.src = './assets/icons/more.svg';
  edit.onclick = () => (text.textContent = prompt(newtext, text.textContent));
  let remove = document.createElement('img');
  remove.src ='./assets/icons/check.svg';
  remove.onclick = () => TodoBox.removeChild(cont);
  controls.appendChild(edit);
  controls.appendChild(remove);
  cont.appendChild(text);
  cont.appendChild(controls);
  return cont;
}




