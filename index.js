const express =require("express")
const cors =require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const Jugadores = []

class Player {
    constructor(id){
        this.id = id
        
    }
    asignarMokepon(mokepon){
        this.mokepon  = mokepon
    }
    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }
}
class Mokepon{
    constructor(name){
        this.name  = name
    }
}
app.get("/unirse", (req,res) => {
   const id = `${Math.random()}`

   const player = new Player (id)

   Jugadores.push(player)
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.send(id) 
})


app.post("/mokepon/:jugadorId",(req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const name = req.body.mokepon|| ""
    const mokepon = new Mokepon(name)
    console.log(Jugadores)
    const jugadorIndex  = Jugadores.findIndex((jugador) =>jugadorId ===jugador.id)

    if(jugadorIndex >= 0){
        Jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion",(req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex  = Jugadores.findIndex((jugador) =>jugadorId ===jugador.id)

    if(jugadorIndex >= 0){
        Jugadores[jugadorIndex].actualizarPosicion(x,y)
    }   

    const enemigos=Jugadores.filter((jugador)=>jugadorId!==jugador.id)
    res.send({
        enemigos
    })

})

app.listen(8080, () => {
    console.log("Servidor funcionando")
    })
