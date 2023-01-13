//Criando variáveis
let start = document.getElementById("start");
let upgrade = document.getElementById("mais1");
let upgrade2 = document.getElementById("mais2");
let upgrade3 = document.getElementById("mais3");
let upgrade5 = document.getElementById("mais5");
let upgrade7 = document.getElementById("mais7");
let upgrade10 = document.getElementById("mais10");
let upgrade20 = document.getElementById("mais20");
let upgrade50 = document.getElementById("mais50");
let upgrade100 = document.getElementById("mais100");
let upgrade200 = document.getElementById("mais200");
let upgrade400 = document.getElementById("mais400");
let upgrade500 = document.getElementById("mais500");

let count = 0;

var min = 0;
var seg = 0;

let tempo = 1000;
let cron;

let finish = document.getElementById("congrats");

const CURRENT_NUMBER = document.getElementById('currentNumber');

//Criando função cronômetro
function timer(){
    seg++;
    if (seg == 60){
        seg = 0;
        min++;
    } if(min == 2 && seg == 30){
        window.location.reload(true);
    } 
    let formato = (min < 10 ? '0'+ min : min) + ':' + (seg < 10 ? '0' + seg : seg)
    document.getElementById("cronometro").innerText = formato
}

//Criando função para atualizar os botões
function att(){
    if(count >= 20 && count < 50){
    upgrade.style.cssText = "display:none;",
    upgrade2.style.cssText = "display:inline;";
    }else if(count >= 50 && count < 100){                             
        upgrade2.style.cssText = "display:none;",  
        upgrade3.style.cssText = "display:inline;";    
    }else if(count >= 100 && count < 250){
        upgrade3.style.cssText = "display:none;",  
        upgrade5.style.cssText = "display:inline;";      
    }else if(count >= 250 && count < 500){
        upgrade5.style.cssText = "display:none;",  
        upgrade7.style.cssText = "display:inline;";    
    }else if(count >= 500 && count < 1000){
        upgrade7.style.cssText = "display:none;",  
        upgrade10.style.cssText = "display:inline;";    
    }else if(count >= 1000 && count < 1750){
        upgrade10.style.cssText = "display:none;",  
        upgrade20.style.cssText = "display:inline;";    
    }else if(count >= 1750 && count < 4000){
        upgrade20.style.cssText = "display:none;",  
        upgrade50.style.cssText = "display:inline;";    
    }else if(count >= 4000 && count < 10000){
        upgrade50.style.cssText = "display:none;",  
        upgrade100.style.cssText = "display:inline;";    
    }else if(count >= 10000 && count < 20000){
        upgrade100.style.cssText = "display:none;",  
        upgrade200.style.cssText = "display:inline;";    
    }else if(count >= 20000 && count < 40000){
        upgrade200.style.cssText = "display:none;",  
        upgrade400.style.cssText = "display:inline;";    
    }else if(count >= 40000 && count < 100000){
        upgrade400.style.cssText = "display:none;",  
        upgrade500.style.cssText = "display:inline;";    
    }
}

//Criando função para quando concluir o desafio
function end(){
    if(count >= 100000){
     alert("Amém! Demorou, mas chegou. Você finalmente alcançou os tão sonhados 100000 pontos. Espero que tenha curtido o processo, até o próximo desafio!!!"),
     clearInterval(cron);
     count = 0; 
     upgrade500.style.cssText = "display:none;";
     finish.style.cssText = "display:inline;";
    }
}

//Criando função para começar o cronômetro ao clicar em "Começar" 
function clean(){
    start.style.cssText = "display:none;"
    upgrade.style.cssText = "display:inline;"
    cron = setInterval(() => {timer()}, tempo)
}

//Criando funções para adicionar os pontos
function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment2() {
    count+=2;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment3() {
    count+=3;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment5() {
    count+=5;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment7() {
    count+=7;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment10() {
    count+=10;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment20() {
    count+=20;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment50() {
    count+=50;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment100() {
    count+=100;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment200() {
    count+=200;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment400() {
    count+=400;
    CURRENT_NUMBER.innerHTML = count;
    att();
}
function increment500() {
    count+=500;
    CURRENT_NUMBER.innerHTML = count;
    end();
}

//Funções para retirar pontos conforme o tempo passar
function decrementA(){
    if(count > 20 && count <= 100){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementA, 1000);

function decrementB(){
    if(count > 100 && count <= 500){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementB, 500);

function decrementC(){
    if(count > 500 && count <= 1000){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }else if(count > 1000 && count <= 2000){
        count-=2;
        CURRENT_NUMBER.innerHTML = count;
    }else if(count > 2000 && count <= 4000){
        count-=3;
        CURRENT_NUMBER.innerHTML = count;
    }else if(count > 4000 && count <= 10000){
        count-=5;
        CURRENT_NUMBER.innerHTML = count;
    }else if(count > 10000 && count <= 20000){
        count-=10;
        CURRENT_NUMBER.innerHTML = count;
    }else if(count > 20000 && count <= 50000){
        count-=30;
        CURRENT_NUMBER.innerHTML = count;
    }else if(count > 50000){
        count-=70;
        CURRENT_NUMBER.innerHTML = count;
    }         
}
setInterval(decrementC, 100);










