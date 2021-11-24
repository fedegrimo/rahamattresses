const  essential = document.querySelector('#btn-e');
const  balance = document.querySelector('#btn-balance');
const  wellness = document.querySelector('#btn-wellness');
const  memory = document.querySelector('.btn-memory');
const  purotex = document.querySelector('.btn-purotex');
const  bamboo = document.querySelector('.btn-bamboo');
const  adaptative = document.querySelector('.btn-adaptative');
const  sanitized = document.querySelector('.btn-sanitized');
const  tencel = document.querySelector('.btn-tencel');

essential.addEventListener('click',() => {
    removeClass();
    memory.classList.add('active');
    purotex.classList.add('active');
});

balance.addEventListener('click',() => {
    removeClass();
    memory.classList.add('active');
    bamboo.classList.add('active');
    adaptative.classList.add('active');
});

wellness.addEventListener('click',() => {
    removeClass();
    memory.classList.add('active');
    sanitized.classList.add('active');
    purotex.classList.add('active');
    tencel.classList.add('active');
    adaptative.classList.add('active');
});

function removeClass(){
    memory.classList.remove('active');
    purotex.classList.remove('active');
    bamboo.classList.remove('active');
    adaptative.classList.remove('active');
    sanitized.classList.remove('active');
    tencel.classList.remove('active');
}

