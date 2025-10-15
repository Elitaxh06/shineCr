import express from "express"

const app = express()
const port = 3000
app.use(express.json())

app.get("/api/prueba", (req, res) => {
    res.send("Api funcionando")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})