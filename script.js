const input = document.querySelector('input');

const add = document.querySelector('#add');
let task = document.querySelector('#task');
let ul = document.querySelector('#to-do-list');

let icons = '<div><ion-icon id="ch" name="checkmark-outline"></ion-icon> <ion-icon id="del" name="close-outline"></ion-icon></div>';

add.addEventListener('click', () => {  
    if (input.value.length === 0) {
        alert('Digite uma tarefa.');
    } else {       
        const newTask = task.cloneNode(true); 
        newTask.innerHTML = input.value + icons;
        newTask.classList.remove('invisible');
        ul.appendChild(newTask);

        const check = document.querySelector('#ch');
        check.addEventListener('click', () => {
            newTask.style = 'background: blue;'
        });

        const dell = document.querySelector('#del');
        dell.addEventListener('click', () => {
            newTask.style = 'display: none;'
        });
    };   
});

