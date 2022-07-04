
let addBtn = document.getElementById('add-item');


const tasksLimit = 19;
let tasks = 0

function addItem() {
    document.getElementById('modal').style.display = 'flex'
    document.getElementById('background-modal').style.display = 'initial'
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('background-modal').style.display = 'none'
}

function submitBtn() {

    let newTaskInput = document.getElementById('new-task-input')

    tasks++
    
    if(tasks === tasksLimit) {
        addBtn.disabled = true
    } else {
        addBtn.disabled = false
    }
    
    var newItem = document.createElement('div')
    newItem.classList.add('todo-item')
    newItem.id = 'element'+tasks
    
    var todoContainer = document.getElementById('todo-container')
    todoContainer.appendChild(newItem);
    
    var leftContainer = document.createElement('div');
    leftContainer.classList.add('left-side-todo-item-container');
    newItem.appendChild(leftContainer)

    var newCheckbox = document.createElement("input");
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.setAttribute('onclick', 'checkboxChange(this.id)');
    newCheckbox.classList.add('checkbox')
    newCheckbox.id = 'cb'+tasks
    leftContainer.appendChild(newCheckbox);

    var newText = document.createElement('p');
    newText.classList.add('item-text');
    newText.innerHTML = newTaskInput.value
    newText.id = 'tcb'+tasks
    leftContainer.appendChild(newText);

    var newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('delete-item');
    newDeleteBtn.setAttribute('onclick', 'deleteItem(this.id)');
    newDeleteBtn.innerHTML = 'X'
    newDeleteBtn.id = tasks
    newItem.appendChild(newDeleteBtn);

    document.getElementById('modal').style.display = 'none'
    document.getElementById('background-modal').style.display = 'none'
    newTaskInput.value = ''
}

function deleteItem(elementId) {
    tasks--
    document.getElementById('element'+elementId).remove()
}

function checkboxChange(elementId) {
    let checkbox = document.getElementById(elementId)

    if(checkbox.checked){
        let text = document.getElementById('t'+elementId);
        text.style.textDecoration = 'line-through';
        text.style.color = 'rgb(165, 165, 165)'
    } else {
        let text = document.getElementById('t'+elementId);
        text.style.textDecoration = 'none';
        text.style.color = 'rgb(208, 208, 208)'
    }
}