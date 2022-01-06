




window.addEventListener("load", ()=>{
    essentialAction();
});
function essentialAction(){
    removeClass();
    var  memory = document.querySelector('#btn-memory');
    var  sanitized = document.querySelector('#btn-sanitized');
    memory.classList.add('active');
    sanitized.classList.add('active');
}

function balanceAction(){
    removeClass();
    var  memory = document.querySelector('#btn-memory');
    var  bamboo = document.querySelector('#btn-bamboo');
    var  adaptative = document.querySelector('#btn-adaptative');
    memory.classList.add('active');
    bamboo.classList.add('active');
    adaptative.classList.add('active');
}

function wellnessAction(){
    removeClass();
    var  memory = document.querySelector('#btn-memory');
    var  purotex = document.querySelector('#btn-purotex');
    var  adaptative = document.querySelector('#btn-adaptative');
    var  tencel = document.querySelector('#btn-tencel');
    memory.classList.add('active');
    purotex.classList.add('active');
    tencel.classList.add('active');
    adaptative.classList.add('active');
}

function removeClass(){
    var  memory = document.querySelector('#btn-memory');
    var  purotex = document.querySelector('#btn-purotex');
    var  bamboo = document.querySelector('#btn-bamboo');
    var  adaptative = document.querySelector('#btn-adaptative');
    var  sanitized = document.querySelector('#btn-sanitized');
    var  tencel = document.querySelector('#btn-tencel');
    memory.classList.remove('active');
    purotex.classList.remove('active');
    bamboo.classList.remove('active');
    adaptative.classList.remove('active');
    sanitized.classList.remove('active');
    tencel.classList.remove('active');
}

