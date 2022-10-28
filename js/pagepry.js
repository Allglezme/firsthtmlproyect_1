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

const sectionVerMapa = document.getElementById("verMapa")
const mapa = document.getElementById("mapa")

let mokepones = []

let ataqueJugador = []
let ataqueEnemigo = []
let ataquesMokepon
let ataqueMokeponEnemigo

let inputBunwilkl
let inputSuit  
let inputDomino 
let inputPendu 
let inputHiphap 
let inputRocky 

let botonFuego
let botonAgua
let botonTierra

let botones = []

let mascotaJugador

let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

let lienzo = mapa.getContext("2d")
let intervaloMov
let mapaBackground = new Image()

mapaBackground.src = "./assets/kemoponmap.png"

class Mokepon {
    constructor(name, picture, hp){
        this.name = name
        this.picture = picture
        this.hp = hp 
        this.ataques = []  
        this.x = 20
        this.y = 20
        this.ancho = 80 
        this.alto= 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = picture
        this.velocidadX = 0
        this.velocidadY = 0
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
let Pendu = new Mokepon("Pendu","./assets/foxinyFront.png",5)
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
Pendu.ataques.push(
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
mokepones.push(Bunwilkl,Suit,Domino,Hiphap,Pendu,Rocky)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"
    
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
        inputPendu = document.getElementById("Pendu")
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
    else if(inputPendu.checked){
        spanMascotaJugador.innerHTML = inputPendu.id
        mascotaJugador = inputPendu.id
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

        sectionVerMapa.style.display = "flex"
        iniciarMapa() 
        //sectionSeleccionarAtaque.style.display = "flex"
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
      <button class =  "botonAtaque BAtaque ${ataque.class}"  id=${ataque.id}>${ataque.nombre}</button>
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
            console.log(e.target.textContent)
            if (e.target.textContent === "Fuego" ){
                ataqueJugador.push("Fuego")
                console.log(ataqueJugador)
                boton.disabled = true
            }else if (e.target.textContent === "Agua" ){
                ataqueJugador.push("Agua")
                console.log(ataqueJugador)
                boton.disabled = true
            }else if(e.target.textContent === "Tierra" ){
                ataqueJugador.push("Tierra")
                console.log(ataqueJugador)
                boton.disabled = true
            }else {
                console.log("ERROR")
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
    iniciarPelea()
}
function iniciarPelea(){    
    if (ataqueJugador.length === 5) {
        combate()
    }
}
function indexAmbosOponente(jugador,enemigo){
    indexAtaqueJugador =ataqueJugador[jugador]
    indexAtaqueEnemigo =ataqueEnemigo[enemigo]
}
function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] === ataqueEnemigo[index]) {
        indexAmbosOponente(index, index)
            crearMensaje("EMPATE")        
        } else if (ataqueJugador[index] === 'Fuego' && ataqueEnemigo[index] === 'Tierra') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador    
        } else if (ataqueJugador[index] ==='Agua' && ataqueEnemigo[index] === 'Fuego') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador  
        } else if (ataqueJugador[index] === 'Tierra' && ataqueEnemigo[index] === 'Agua') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    
    }
    revisarVidas()
    console.log("se revisaron las vidas")
}

function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("El combate fue un empate")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Ganaste el combate")
    }else if (victoriasJugador < victoriasEnemigo){
        crearMensajeFinal("Perdiste el combate")
    }else{
        console.log("Error")
    }
}
function crearMensaje(resultadoCombate){
    let nuevoAtaquedelJugador = document.createElement('p')
    let nuevoAtaquedelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaquedelJugador.innerHTML  = indexAtaqueJugador
    nuevoAtaquedelEnemigo.innerHTML  = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaquedelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaquedelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML= resultadoFinal

    

    sectionReiniciar.style.display = "block"
}
function reiniciarJuego (){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function pintarCanvas(){
    Suit.x = Suit.x + Suit.velocidadX
    Suit.y = Suit.y + Suit.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height

    )
    lienzo.drawImage(
        Suit.mapaFoto,
        Suit.x,
        Suit.y,
        Suit.ancho,
        Suit.alto
    )
}
function moverDerecha(){
    Suit.velocidadX = 5
}
function moverIzquierda(){
    Suit.velocidadX = -5   
}
function moverAbajo(){
    Suit.velocidadY = +5
}
function moverArriba(){
    Suit.velocidadY =-5
    
}
function detenerMovimiento(){
    Suit.velocidadX = 0
    Suit.velocidadY = 0
}
function sePresionoTecla (event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowRight":
            moverDerecha()
                break;
        case "ArrowLeft":
            moverIzquierda()
                break;
        default:
            break;
    }
}
function iniciarMapa(){
        mapa.width = 600
        mapa.height = 400
        intervaloMov = setInterval(pintarCanvas,50)

        window.addEventListener("keydown", sePresionoTecla)
        window.addEventListener("keyup", detenerMovimiento)
}
window.addEventListener('load', iniciarJuego)
