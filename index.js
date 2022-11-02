const express =require("express")

const app = express()

const Jugadores = []

class Player {
    constructor(id){
        this.id = id
        
    }
}

app.get("/unirse", (req,res) => {
   const id = `${Math.random()}`

   const player = new Player (id)

   Jugadores.push(player)
    res.send(id) 
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
    })
