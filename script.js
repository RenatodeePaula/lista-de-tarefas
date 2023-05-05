const input = document.querySelector('input');
const add = document.querySelector('#add');
const task = document.querySelector('#task');
const ul = document.querySelector('#to-do-list');
const icons = '<div><ion-icon id="ch" name="checkmark-outline"></ion-icon> <ion-icon id="del" name="close-outline"></ion-icon></div>';

add.addEventListener('click', () => { 
// Verificar se o usuário digitou alguma valor no input 
    if(input.value.length === 0) {
        alert('Digite uma tarefa.');
    } else { 
// Clonando o valor da lista que tem no HTML, removendo a classe invisible, inserindo HTML dentro dela, add ela dentro da ul
        const newTask = task.cloneNode(true); 
        newTask.classList.remove('invisible');
        newTask.innerHTML = input.value + icons;
        ul.appendChild(newTask);
// Pegando o botão check de dentor da lista clonada, add um evento para inserir CSS que altora o estado para check com um click
        const check = newTask.querySelector('#ch');
        check.addEventListener('click', () => {
            newTask.style = 'background: #34073D; transition: .4s; color: white; font-weight: 300; text-decoration: line-through;';
        });
// Pegando o botão delete de dentro da lista clonada, add um evento para remover a lista com um click
        const dell = newTask.querySelector('#del');
        dell.addEventListener('click', () => {
            newTask.remove(true);
        }); 
        input.value = '';
    };   
});

