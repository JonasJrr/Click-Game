let count = 0;

let upgrade = document.getElementById("mais1");
let upgrade2 = document.getElementById("mais2");
let upgrade3 = document.getElementById("mais3");
let upgrade5 = document.getElementById("mais5");
let upgrade7 = document.getElementById("mais7");
let upgrade10 = document.getElementById("mais10");
let upgrade20 = document.getElementById("mais20");
let upgrade50 = document.getElementById("mais50");
let upgrade100 = document.getElementById("mais100");

const CURRENT_NUMBER = document.getElementById('currentNumber');

function att(){
    if(count >= 20){
    alert("Parabéns pelos 20 pontos! Você está só começando."),
    upgrade.style.cssText = "display:none;",
    upgrade2.style.cssText = "display:inline;";
    }
}

function att2(){
    if(count >= 50){
     alert("Parabéns pelos 50 pontos! Você desbloqueou uma nova melhoria."),   
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
     alert("Parabéns pelos 250 pontos! Mais uma nova melhoria foi desbloqueada."),    
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
     alert("Parabéns pelos 1000 pontos! Não Desista."),
     upgrade10.style.cssText = "display:none;";   
     upgrade20.style.cssText = "display:inline;";
    }
}

function att20(){
    if(count >= 1750){
     alert("Parabéns pelos 1750 pontos! Você está quase lá."),
     upgrade20.style.cssText = "display:none;";   
     upgrade50.style.cssText = "display:inline;";
    }
}

function att50(){
    if(count >= 4000){
     alert("Parabéns pelos 4000 pontos. Você está na reta final!"),
     upgrade50.style.cssText = "display:none;";   
     upgrade100.style.cssText = "display:inline;";
    }
}

function end(){
    if(count >= 10000){
     alert("Parabéns! Você finalmente alcançou os tão sonhados 10000 pontos. Espero que tenha curtido o processo, até a próxima!!!"),  
     upgrade100.style.cssText = "display:none;";
    }
}


function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att();
}

function increment2() {
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att2();
}

function increment3() {
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att3();
}

function increment5() {
    count++;
    count++;
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att5();
}

function increment7() {
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att7();
}

function increment10() {
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att10();
}


function increment20() {
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att20();
}

function increment50() {
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    att50();
}

function increment100() {
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    count++;
    CURRENT_NUMBER.innerHTML = count;
    end();
}









