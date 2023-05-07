import express from "express"
import { __dirname } from "./utils.js"

const app = express()

app.use(express.json)
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/public"))



app.get("/", (req, res) => {
    res.send("desde navegador 5")
})




app.listen(8080, () => {
    console.log("escuchando puerto")
})