const sectionSeleccionarAtaque= document.getElementById("seleccionarataque")
const sectionReiniciar= document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
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
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []

let ataqueJugador = []
let ataqueEnemigo = []
let ataquesMokepon
let ataqueMokeponEnemigo

let inputBunwilkl
let inputSuit  
let inputDomino 
let inputTraidor 
let inputHiphap 
let inputRocky 

let botonFuego
let botonAgua
let botonTierra



let botones = []

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

Bunwilkl.ataques.push(
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
)
Suit.ataques.push(
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
)
Domino.ataques.push(
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
)
Hiphap.ataques.push(
    {nombre: "Agua", id:"botonAgua", class:"botonAtaquetipoagua" },
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
)
Traidor.ataques.push(
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
)
Rocky.ataques.push(
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
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
        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo() 
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
    mostrarAtaques(ataques)
}
//function mostrarAtaques(ataques)
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
      <button class = "botonAtaque BAtaque ${ataque.class}"  id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('botonFuego')
     botonAgua = document.getElementById('botonAgua')
     botonTierra = document.getElementById('botonTierra')
    
    botones = document.querySelectorAll(".BAtaque")
}
function secuenciaAtaques (){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) =>{
            if (e.target.textcontent === "Fuego" ){
                ataqueJugador.push("Fuego")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }else if (e.target.textcontent === "Agua" ){
                ataqueJugador.push("Agua")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }else {
                ataqueJugador.push("Tierra")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].name
    ataqueMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    secuenciaAtaques ()
} 

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,ataqueMokeponEnemigo.length -1) 
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('Fuego')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('Agua')
    } else {
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueEnemigo)
    combate()
}
  
function combate(){
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("⚖Empate")
    }
    else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje("🎉Ganaste")  
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo    
    }else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("🎉Ganaste")    
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo   
    }else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
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
