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

let jugadorId = null

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
let mascotaJugadorObjeto

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

let alturaDeseada
let anchoDelMapa = window.innerWidth -40
const anchoMaxMapa = 640
if (anchoDelMapa > anchoMaxMapa){
    anchoDelMapa = anchoMaxMapa -40
}

alturaDeseada = anchoDelMapa * 600/800
mapa.width = anchoDelMapa
mapa.height = alturaDeseada

class Mokepon {
    constructor(name, picture, hp){
        this.name = name
        this.picture = picture
        this.hp = hp 
        this.ataques = []  
        this.ancho = 80 
        this.alto= 80
        this.x = aleatorio(0,mapa.width -this.ancho)
        this.y = aleatorio(0,mapa.height -this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = picture
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMiMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
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
let Hiphap = new Mokepon("Hiphap","./assets/puppymFront.png",5)
let Pendu = new Mokepon("Pendu","./assets/foxinyFront.png",5)
let Rocky = new Mokepon("Rocky","./assets/wolfFront.png",5)

const BunwilklAtaques = [
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
]
const SuitAtaques =[
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
] 

const DominoAtaques =[
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
]

const HiphapAtaques =[
    {nombre: "Agua", id:"botonAgua", class:"botonAtaquetipoagua" },
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
]

const PenduAtaques =[
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
]

const RockyAtaques =[
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Fuego", id:"botonFuego", class:" botonAtaquetipofuego"},
    {nombre: "Agua", id:"botonAgua", class:" botonAtaquetipoagua"},
    {nombre: "Tierra", id:"botonTierra", class:" botonAtaquetipotierra"},
]
Bunwilkl.ataques.push(...BunwilklAtaques)
Suit.ataques.push(...SuitAtaques)
Domino.ataques.push(...DominoAtaques)
Hiphap.ataques.push(...HiphapAtaques)
Pendu.ataques.push(...PenduAtaques)
Rocky.ataques.push(...RockyAtaques)
//Enemigos
/*BunwilklEnemigo.ataques.push(...BunwilklAtaques)
SuitEnemigo.ataques.push()
DominoEnemigo.ataques.push()
HiphapEnemigo.ataques.push()
PenduEnemigo.ataques.push()
RockyEnemigo.ataques.push()*/

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
    unirseAlJuego()
}
function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
    .then(function(res) {
        if (res.ok){
            res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta
                })   
        }
    })
}
//Pantalla inicial
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
    }//Cambio de pantalla
    if (spanMascotaJugador.innerHTML != ""){
        extraerAtaques(mascotaJugador)
        sectionSeleccionarMascota.style.display = "none"

        sectionVerMapa.style.display = "flex"
        iniciarMapa() 

        seleccionarMokepon(mascotaJugador)
        
    }
    
}
function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method:"post",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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
function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.name
    ataqueMokeponEnemigo = enemigo.ataques

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
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height

    )
    mascotaJugadorObjeto.pintarMiMokepon()

    enviarPosicion(mascotaJugadorObjeto.x,mascotaJugadorObjeto.y)

    BunwilklEnemigo.pintarMiMokepon()
    SuitEnemigo.pintarMiMokepon()
    DominoEnemigo.pintarMiMokepon()
    HiphapEnemigo.pintarMiMokepon()
    PenduEnemigo.pintarMiMokepon()
    RockyEnemigo.pintarMiMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColisiones(DominoEnemigo)
        revisarColisiones(BunwilklEnemigo)
        revisarColisiones(SuitEnemigo)
        revisarColisiones(HiphapEnemigo)
        revisarColisiones(PenduEnemigo)
        revisarColisiones(RockyEnemigo)
    }
}

function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if (res.ok){
            res.json()
                .then(function({enemigos}){
                    console.log(enemigos)
                    enemigos.forEach(function(enemigo){
                        const mokeponname =enemigo.mokepon.name || ""
                        if (mokeponname === Bunwilkl) {
                            let BunwilklEnemigo = new Mokepon("Bunwilkl","./assets/bbokariFront.png",5)
                        }else if (mokeponname === Suit){
                            let SuitEnemigo = new Mokepon("Suit","./assets/leebitFront.png",5)
                        }else if (mokeponname === Domino){
                            let DominoEnemigo = new Mokepon("Domino","./assets/jiniretFront.png",5)
                        }else if (mokeponname === Hiphap){
                            let HiphapEnemigo = new Mokepon("Hiphap","./assets/puppymFront.png",5)
                        }else if (mokeponname === Pendu){
                            let PenduEnemigo = new Mokepon("Pendu","./assets/foxinyFront.png",5)
                        }else if (mokeponname === Rocky){
                            let RockyEnemigo = new Mokepon("Rocky","./assets/wolfFront.png",5)
                        }
                    })  
                })
        }
    }) 
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5   
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = +5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY =-5
    
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
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
        
        mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
        intervaloMov = setInterval(pintarCanvas,100)

        window.addEventListener("keydown", sePresionoTecla)
        window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].name ) {
            return mokepones[i]
        }
}
}

function revisarColisiones(enemigo){
    const arribaEnemigo   = enemigo.y
    const abajoEnemigo     = enemigo.y + enemigo.alto
    const derechaEnemigo   = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 
   
    const superiorObjetoMascota  = mascotaJugadorObjeto.y
    const inferiorObjetoMascota  = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaObjetoMascota   = mascotaJugadorObjeto.x +  mascotaJugadorObjeto.ancho
    const izquierdaObjetoMascota  = mascotaJugadorObjeto.x 

    if(
        inferiorObjetoMascota < arribaEnemigo   ||
        superiorObjetoMascota > abajoEnemigo     ||
        derechaObjetoMascota  < izquierdaEnemigo ||
        izquierdaObjetoMascota  > derechaEnemigo
    ){
        return 
    }
    detenerMovimiento()
    clearInterval(intervaloMov)
    console.log("colisionaste")
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
   // alert("Colisionaste con "+ enemigo.name)
}

window.addEventListener ('load', iniciarJuego)