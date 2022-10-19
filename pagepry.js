function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputBunwilkl = document.getElementById("Bunwilkl")
    let inputSuit = document.getElementById("Suit")
    let inputDomino = document.getElementById("Domino")
    let inputTraidor = document.getElementById("Traidor")
    let inputHiphap = document.getElementById("Hiphap")
    let inputRocky = document.getElementById("Rocky")
    if (inputBunwilkl.checked){
        alert ("Seleccionaste a Bunwilkl")
    }
    else if(inputSuit.checked){
        alert ("Seleccionaste a Suit")
    }
    else if(inputDomino.checked){
        alert ("Seleccionaste a Domino")
    }
    else if(inputTraidor.checked){
        alert ("Seleccionaste a Traidor")
    }
    else if(inputHiphap.checked){
        alert ("Seleccionaste a Hiphap")
    }
    else if(inputRocky.checked){
        alert ("Seleccionaste a Rocky")
    }
    else {
        alert("Debes seleccionar una mascota 👈")
    }
}

window.addEventListener('load', iniciarJuego)
