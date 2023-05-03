const input = document.querySelector('input');

let ul = document.querySelector('#to-do-list');

const add = document.querySelector('#add');

add.addEventListener('click', function () {
    let list = document.createElement('li');
    list.id = 'text-content';
    if (input.value.length === 0) {
        alert('Digite uma tarefa.');

    } else {
        list.textContent = input.value;
        input.value = null;
        ul.appendChild(list);
    };   
});
