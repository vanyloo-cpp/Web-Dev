
let inputField = document.getElementById("task");

//When pressed Add-button
function addTask() { 
    let taskText = inputField.value.trim(); 
    if (taskText === "") return; 
 
    let li = document.createElement("li"); 
    li.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> 
                    <span class="task-text">${taskText}</span> 
                    <button class="delete-btn" onclick="deleteTask(this)">🗑</button>`; 
     
    document.getElementById("task-list").appendChild(li); 
    inputField.value = ""; 
} 
 
//When pressed checkbox(task is done)
function toggleTask(checkbox) { 
    let taskText = checkbox.nextElementSibling; 
    taskText.classList.toggle("completed", checkbox.checked); 
} 
 
//When pressed delete icon
function deleteTask(button) { 
    button.parentElement.remove(); 
} 

//When typed and pressed enter
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});