const express    = require('express')
const app        = express()
const mongoose   = require('mongoose')
const requireDir = require('require-dir')
const cors       = require('cors')
mongoose.connect("mongodb://127.0.0.1:27017/game-of-thrones", { useNewUrlParser: true })

//Permite acessar todos os modelos que estiverem dentro da pasta models
requireDir("./src/models")

//Permitir que outras app acessem a api
app.use(cors())

//permitir que a app receba dados no formato json
app.use(express.json())

//Use - recebe todo tipo de requisição, e usamos o prefixo /api
app.use('/api', require("./src/routes"))

app.listen(3001, function(){
    console.log('Servidor rodando')
})