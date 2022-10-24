let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque= document.getElementById("seleccionarataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego= document.getElementById('botonFuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua= document.getElementById('botonAgua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra= document.getElementById('botonTierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton reiniciar')
    botonReiniciar.addEventListener("click",reiniciarJuego)
    }

function seleccionarMascotaJugador() {


    let inputBunwilkl = document.getElementById("Bunwilkl")
    let inputSuit = document.getElementById("Suit")
    let inputDomino = document.getElementById("Domino")
    let inputTraidor = document.getElementById("Traidor")
    let inputHiphap = document.getElementById("Hiphap")
    let inputRocky = document.getElementById("Rocky")

    let spanMascotaJugador = document.getElementById("mascotaJugador")
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
        let sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
        sectionSeleccionarMascota.style.display = "none"
    
        let sectionSeleccionarAtaque= document.getElementById("seleccionarataque")
        sectionSeleccionarAtaque.style.display = "flex"
    }
    //activarid combate
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")
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
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")
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
    let sectionMensajes=document.getElementById('resultadoDelAtaque')
    let ataqueDelJugador=document.getElementById('ataqueDelJugador')
    let ataqueDelEnemigo=document.getElementById('ataqueDelEnemigo')

    let nuevoAtaquedelJugador = document.createElement('p')
    let nuevoAtaquedelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaquedelJugador.innerHTML  = ataqueJugador
    nuevoAtaquedelEnemigo.innerHTML  = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaquedelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaquedelEnemigo)
    }
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById('resultadoDelAtaque')

    sectionMensajes.innerHTML= resultadoFinal

    let botonFuego= document.getElementById('botonFuego')
    botonFuego.disabled = true
    let botonAgua= document.getElementById('botonAgua')
    botonAgua.disabled = true
    let botonTierra= document.getElementById('botonTierra')
    botonTierra.disabled = true

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
    }
function reiniciarJuego (){
    location.reload()
    }

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
window.addEventListener('load', iniciarJuego)
