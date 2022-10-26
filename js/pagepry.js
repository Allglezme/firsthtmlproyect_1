const sectionSeleccionarAtaque= document.getElementById("seleccionarataque")
const sectionReiniciar= document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego= document.getElementById('botonFuego')
const botonAgua= document.getElementById('botonAgua')
const botonTierra= document.getElementById('botonTierra')
const botonReiniciar = document.getElementById('boton reiniciar')

const sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascotaJugador")
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")

const sectionMensajes=document.getElementById('resultadoDelAtaque')
const ataqueDelJugador=document.getElementById('ataqueDelJugador')
const ataqueDelEnemigo=document.getElementById('ataqueDelEnemigo')

const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones

let inputBunwilkl
let inputSuit  
let inputDomino 
let inputTraidor 
let inputHiphap 
let inputRocky 

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(name, picture, hp){
        this.name = name
        this.picture = picture
        this.hp = hp 
        this.ataques = []  
    }
}
let Bunwilkl = new Mokepon("Bunwilkl","./assets/bbokariFront.png",5)
let Suit = new Mokepon("Suit","./assets/leebitFront.png",5)
let Domino = new Mokepon("Domino","./assets/jiniretFront.png",5)
let Hiphap = new Mokepon("Hiphap","./assets/quokkaFront.png",5)
let Traidor = new Mokepon("Traidor","./assets/foxinyFront.png",5)
let Rocky = new Mokepon("Rocky","./assets/wolfFront.png",5)

Bunwilkl.ataques.push(
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Tierra", id:"botonTierra"},
)
Suit.ataques.push(
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Tierra", id:"botonTierra"},
)
Domino.ataques.push(
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Tierra", id:"botonTierra"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Tierra", id:"botonTierra"},
)
Hiphap.ataques.push(
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Tierra", id:"botonTierra"},
    {nombre: "Tierra", id:"botonTierra"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Tierra", id:"botonTierra"},
)
Traidor.ataques.push(
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Tierra", id:"botonTierra"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Tierra", id:"botonTierra"},
)
Rocky.ataques.push(
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Fuego", id:"botonFuego"},
    {nombre: "Agua", id:"botonAgua"},
    {nombre: "Tierra", id:"botonTierra"},
)
mokepones.push(Bunwilkl,Suit,Domino,Hiphap,Traidor,Rocky)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    
    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.name} />
        <label class = "tarjetademokepon" for=${Mokepon.name}>
            <p>${Mokepon.name}</p>
            <img src=${Mokepon.picture} alt=${Mokepon.name}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputBunwilkl = document.getElementById("Bunwilkl")
        inputSuit = document.getElementById("Suit")
        inputDomino = document.getElementById("Domino")
        inputTraidor = document.getElementById("Traidor")
        inputHiphap = document.getElementById("Hiphap")
        inputRocky = document.getElementById("Rocky")
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
   
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function seleccionarMascotaJugador() {
    if (inputBunwilkl.checked){
        alert ("Seleccionaste a Bunwilkl")
        spanMascotaJugador.innerHTML = "Bunwilkl"
    }
    else if(inputSuit.checked){
        alert ("Seleccionaste a Suit")
        spanMascotaJugador.innerHTML = "Suit"
    }
    else if(inputDomino.checked){
        alert ("Seleccionaste a Domino")
        spanMascotaJugador.innerHTML = "Domino"
    }
    else if(inputTraidor.checked){
        alert ("Seleccionaste a Traidor")
        spanMascotaJugador.innerHTML = "Traidor"
    }
    else if(inputHiphap.checked){
        alert ("Seleccionaste a Hiphap")
        spanMascotaJugador.innerHTML = "Hiphap"
    }
    else if(inputRocky.checked){
        alert ("Seleccionaste a Rocky")
        spanMascotaJugador.innerHTML = "Rocky"
    }
    else {
        alert("Debes seleccionar una mascota 👈")
    }
    if (spanMascotaJugador.innerHTML != ""){
        seleccionarMascotaEnemigo() 
        sectionSeleccionarMascota.style.display = "none"
        sectionSeleccionarAtaque.style.display = "flex"
    }
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Bunwilkl"
        }
        else if (ataqueAleatorio == 2){
            spanMascotaEnemigo.innerHTML = "Suit"   
        }
        else if (ataqueAleatorio == 3){
            spanMascotaEnemigo.innerHTML = "Domino"
        }
        else if (ataqueAleatorio == 4){
            spanMascotaEnemigo.innerHTML = "Traidor"
        }
        else if (ataqueAleatorio == 5){
            spanMascotaEnemigo.innerHTML = "Hiphap"
        }
        else if (ataqueAleatorio == 6){
            spanMascotaEnemigo.innerHTML = "Rocky"
        }
}    
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}   
function combate(){
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("⚖Empate")
    }
    else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("🎉Ganaste")  
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo    
    }else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("🎉Ganaste")    
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo   
    }else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("🎉Ganaste")      
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        crearMensaje("😜Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Ganaste el combate")
    }else if (vidasJugador ==0){
        crearMensajeFinal("Perdiste el combate")
    }
}
function crearMensaje(resultadoCombate){
    let nuevoAtaquedelJugador = document.createElement('p')
    let nuevoAtaquedelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaquedelJugador.innerHTML  = ataqueJugador
    nuevoAtaquedelEnemigo.innerHTML  = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaquedelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaquedelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML= resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = "block"
}
function reiniciarJuego (){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)

