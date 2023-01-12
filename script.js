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

var m = 0;
var s = 0;

let tempo = 1000;
let cron;

let finish = document.getElementById("congrats");

const CURRENT_NUMBER = document.getElementById('currentNumber');

//Criando Função Cronômetro
function timer(){
    s++;
    if (s == 60){
        s = 0;
        m++;
    } if(m==2 && s == 30){
        window.location.reload(true);
    } 
    let formato = (m < 10 ? '0'+ m : m) + ':' + (s < 10 ? '0' + s : s)
    document.getElementById("cronometro").innerText = formato
}

//Criando funções para atualizar os botões
function att(){
    if(count >= 20){
    alert("Parabéns pelos 20 pontos! Você está só começando."),
    upgrade.style.cssText = "display:none;",
    upgrade2.style.cssText = "display:inline;";
    }
}
function att2(){
    if(count >= 50){ 
     upgrade2.style.cssText = "display:none;",  
     upgrade3.style.cssText = "display:inline;";
    }
}
function att3(){
    if(count >= 100){
     alert("Parabéns pelos 100 pontos! Você está avançando rapidamente."),   
     upgrade3.style.cssText = "display:none;";
     upgrade5.style.cssText = "display:inline;";
    }
}
function att5(){
    if(count >= 250){  
     upgrade5.style.cssText = "display:none;";   
     upgrade7.style.cssText = "display:inline;";
    }
}
function att7(){
    if(count >= 500){
     alert("Parabéns pelos 500 pontos! Continue em frente."), 
     upgrade7.style.cssText = "display:none;";   
     upgrade10.style.cssText = "display:inline;";
    }
}
function att10(){
    if(count >= 1000){
     upgrade10.style.cssText = "display:none;";   
     upgrade20.style.cssText = "display:inline;";
    }
}
function att20(){
    if(count >= 1750){
     alert("Parabéns pelos 1750 pontos. Você está somando bastante pontos!"),
     upgrade20.style.cssText = "display:none;";   
     upgrade50.style.cssText = "display:inline;";
    }
}
function att50(){
    if(count >= 4000){
     upgrade50.style.cssText = "display:none;";   
     upgrade100.style.cssText = "display:inline;";
    }
}
function att100(){
    if(count >= 10000){
     alert("10000 pontos?! Incrível!"),
     upgrade100.style.cssText = "display:none;";   
     upgrade200.style.cssText = "display:inline;";
    }
}
function att200(){
    if(count >= 20000){
     upgrade200.style.cssText = "display:none;";   
     upgrade400.style.cssText = "display:inline;";
    }
}
function att400(){
    if(count >= 40000){
     upgrade400.style.cssText = "display:none;";   
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

//Criando função para começar o cronômetro ao clicar em começar 
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
    att2();
}
function increment3() {
    count+=3;
    CURRENT_NUMBER.innerHTML = count;
    att3();
}
function increment5() {
    count+=5;
    CURRENT_NUMBER.innerHTML = count;
    att5();
}
function increment7() {
    count+=7;
    CURRENT_NUMBER.innerHTML = count;
    att7();
}
function increment10() {
    count+=10;
    CURRENT_NUMBER.innerHTML = count;
    att10();
}
function increment20() {
    count+=20;
    CURRENT_NUMBER.innerHTML = count;
    att20();
}
function increment50() {
    count+=50;
    CURRENT_NUMBER.innerHTML = count;
    att50();
}
function increment100() {
    count+=100;
    CURRENT_NUMBER.innerHTML = count;
    att100();
}
function increment200() {
    count+=200;
    CURRENT_NUMBER.innerHTML = count;
    att200();
}
function increment400() {
    count+=400;
    CURRENT_NUMBER.innerHTML = count;
    att400();
}
function increment500() {
    count+=500;
    CURRENT_NUMBER.innerHTML = count;
    end();
}

//Será retirado 1 ponto a cada 1 segundo
function decrementA(){
    if(count > 20){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementA, 1000);

//Será retirado 1 ponto a cada 0,5 segundos
function decrementB(){
    if(count > 100){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementB, 500);

//Será retirado 1 ponto a cada 0,1 segundos
function decrementC(){
    if(count > 500){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementC, 100);

//Será retirado 2 pontos a cada 0,1 segundos
function decrementD(){
    if(count > 1000){
        count-=2;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementD, 100);

//Será retirado 3 pontos a cada 0,1 segundos
function decrementE(){
    if(count > 2000){
        count-=3;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementE, 100);

//Será retirado 5 pontos a cada 0,1 segundos
function decrementF(){
    if(count > 4000){
        count-=5;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementF, 100);

//Será retirado 10 pontos a cada 0,1 segundos
function decrementG(){
    if(count > 10000){
        count-=10;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementG, 100);

//Será retirado 30 pontos a cada 0,1 segundos
function decrementH(){
    if(count > 20000){
        count-=30;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementH, 100);

//Será retirado 70 pontos a cada 0,1 segundos
function decrementH(){
    if(count > 50000){
        count-=70;
        CURRENT_NUMBER.innerHTML = count;
    }}
setInterval(decrementH, 100);









