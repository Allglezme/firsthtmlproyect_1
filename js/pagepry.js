let ataqueJugador 
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego= document.getElementById('botonFuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua= document.getElementById('botonAgua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra= document.getElementById('botonTierra')
    botonTierra.addEventListener('click', ataqueTierra)
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

    seleccionarMascotaEnemigo()
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
    alert(ataqueJugador)
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    alert(ataqueJugador)
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    alert(ataqueJugador)
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)
