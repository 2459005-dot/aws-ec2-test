require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`.env test: ${process.env.DATABASE_NAME}`)
})

app.listen(PORT, () => {
    console.log(`server run : ${PORT}`)
})