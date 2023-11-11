let piedra = document.getElementById("piedra");
const ROCK = 0;


let papel = document.getElementById("papel");
const PAPER = 1;


let tijera = document.getElementById("tijera");
const SCISSOR = 2;


const Ganas = "Tu Ganas";
const Pierdes = "Pierdes";
const Empate = "Empate";

let contadorUsuario = document.getElementById("contador-usuario")
let contadorOrdenador = document.getElementById("contador-ordenador");
contadorOrdenador = 0
contadorUsuario = 0

let Resultados = document.getElementById("resultados")

piedra.addEventListener("click",function(){
    console.log("piedra")
    jugada(ROCK)
})
papel.addEventListener("click",function(){
    console.log("papel")
    jugada(PAPER)
})
tijera.addEventListener("click",function(){
    console.log("tijera")
    jugada(SCISSOR)
})
function jugada(user){
    
    const pcoption = Math.floor(Math.random()*3)
    console.log(pcoption)
    const Total = Resultado(user,pcoption)
    //he usado switch por variar un poco el codigo y me parece mas limpio
    switch(Total){
        case Ganas:
            Resultados.innerHTML=("Tu Ganas");
            contadorUsuario++;
            console.log(contadorUsuario)
            contadorUsuario.innerHTML=contadorUsuario
            
            break;
        case Pierdes:
            Resultados.innerHTML=("Pierdes");
            contadorOrdenador++;
            break;
        case Empate:
            Resultados.innerHTML=("Empate");
             break;
    }
  
}
function Resultado(user,pcoption){
if(user===pcoption){
    return Empate;
    }else if(user===ROCK && pcoption===PAPER){
        return Pierdes;
    }else if(user===ROCK && pcoption===SCISSOR){
        return Ganas}
//he puesto otro else if y no solo else por que me pedia un ; y no sabia ya donde ponerlo XD
if(user===pcoption){
    return Empate;
    }else if(user===PAPER && pcoption===SCISSOR){
        return Pierdes;
    }else if(user===PAPER && pcoption===ROCK){
        return Ganas}

if(user===pcoption){
    return Empate;
    }else if(user===SCISSOR && pcoption===ROCK){
        return Pierdes;
    }else if(user===SCISSOR && pcoption===PAPER){
        return Ganas}
    }

