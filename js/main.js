
//BOTÃO DE MOTRAR/ESCONDER SENHA

let container = document.querySelector('.fc-box-input');
let input = document.querySelector('fc-senha');
let icon = document.querySelector('img');


icon.addEventListener('click', function() {
    container.classList.toggle('visible');
    if(container.classList.contains('visible')) {
        icon.src = 'imgs/eye-close.svg';
        input.type = 'text';
    } else {
        icon.src = 'imgs/eye.svg';
        input.type = 'password';
    }
});