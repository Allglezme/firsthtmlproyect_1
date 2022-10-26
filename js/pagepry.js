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
const contenedorAtaques =document.getElementById("contenedorAtaques")

let mokepones = []
let Ataques = []

let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let opcionDeAtaques

let inputBunwilkl
let inputSuit  
let inputDomino 
let inputTraidor 
let inputHiphap 
let inputRocky 

let mascotaJugador

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
class Ataque {
    constructor(name,tipoDeAtaque,buttonid ){
        this.name = name
        this.tipoDeAtaque = tipoDeAtaque
        this.buttonid = buttonid 
    }
}
let Bunwilkl = new Mokepon("Bunwilkl","./assets/bbokariFront.png",5)
let Suit = new Mokepon("Suit","./assets/leebitFront.png",5)
let Domino = new Mokepon("Domino","./assets/jiniretFront.png",5)
let Hiphap = new Mokepon("Hiphap","./assets/quokkaFront.png",5)
let Traidor = new Mokepon("Traidor","./assets/foxinyFront.png",5)
let Rocky = new Mokepon("Rocky","./assets/wolfFront.png",5)

let AtaqueFuego  = new Ataque("Fuego 🔥","botonAtaquetipofuego","botonFuego") 
let AtaqueAgua  =  new Ataque("Agua 💧","botonAtaquetipoagua","botonAgua")
let AtaqueTierra  = new Ataque("Tierra 🌱", "botonAtaquetipotierra","botonTierra")

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
Ataques.push(AtaqueFuego,AtaqueAgua,AtaqueTierra)

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
        spanMascotaJugador.innerHTML = inputBunwilkl.id
        mascotaJugador = inputBunwilkl.id
    }
    else if(inputSuit.checked){  
        spanMascotaJugador.innerHTML = inputSuit.id
        mascotaJugador = inputSuit.id
    }
    else if(inputDomino.checked){  
        spanMascotaJugador.innerHTML = inputDomino.id
        mascotaJugador = inputDomino.id
    }
    else if(inputTraidor.checked){
        spanMascotaJugador.innerHTML = inputTraidor.id
        mascotaJugador = inputTraidor.id
    }
    else if(inputHiphap.checked){
        spanMascotaJugador.innerHTML = inputHiphap.id
        mascotaJugador = inputHiphap.id
    }
    else if(inputRocky.checked){
        spanMascotaJugador.innerHTML = inputRocky.id
        mascotaJugador = inputRocky.id
    }
    else {
        alert("Debes seleccionar una mascota 👈")
    }
    if (spanMascotaJugador.innerHTML != ""){
        seleccionarMascotaEnemigo() 
        extraerAtaques(mascotaJugador)
        sectionSeleccionarMascota.style.display = "none"
        sectionSeleccionarAtaque.style.display = "flex"
    }
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].name ) {
            ataques = mokepones[i].ataques
        }
        
    }
    console.log(ataques)
    //ataquesDisponibles(ataques)
}


function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].name
} 
function ataquesDisponibles() {
    Ataques.forEach((Ataque) => {
        opcionDeAtaques = `
        <button class =${Ataque.tipoDeAtaque} "botonAtaque" id=${buttonid}>${Ataque.name}</button>
        `})
        contenedorAtaques.innerHTML += opcionDeAtaques
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

