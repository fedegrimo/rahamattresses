




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

function questionOne(e) {
    var elems = document.querySelectorAll(".q1_active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("q1_active");
    });
    e.target.className = "btn3 q1_active";
}

function questionTwo(e) {
    var elems = document.querySelectorAll(".q2_active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("q2_active");
    });
    e.target.className = "btn3 q2_active";
}

function questionThree(e) {
    var elems = document.querySelectorAll(".q3_active");
    [].forEach.call(elems, function(el) {
        el.classList.remove("q3_active");
    });
    e.target.className = "btn3 q3_active";
}

function validationQuestion(){
    let q1 = document.querySelector(".q1_active");
    let q2 = document.querySelector(".q2_active");
    let q3 = document.querySelector(".q3_active");
    if (q1 && q2 && q3){
        let countWellness = 0
        let countBalance = 0
        let countEssential = 0


        if (q1.dataset.answer == 'wellness'){
            countWellness++; 
        } else if (q1.dataset.answer == 'balance'){
            countBalance++;
        } else {
            countEssential++;
        } 

        if (q2.dataset.answer == 'wellness'){
            countWellness++; 
        } else if (q2.dataset.answer == 'balance'){
            countBalance++;
        } else {
            countEssential++;
        } 

        if (q3.dataset.answer == 'wellness'){
            countWellness++; 
        } else if (q3.dataset.answer == 'balance'){
            countBalance++;
        } else {
            countEssential++;
        } 

        if (countWellness >= 2){
            window.location.href="wellness/es";
        } else if (countBalance >= 2){
            window.location.href="balance/es";
        } else if (countEssential >= 2){
            window.location.href="essential/es";
        } else {
            window.location.href="wellness/es";
        }
        /*console.log(countWellness );
        console.log(countBalance);
        console.log(countEssential);*/
    }
    
}