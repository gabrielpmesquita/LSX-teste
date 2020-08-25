// Muitos chamam esse arquivo de index.js

const express = require('express')

const app = express()

let port = 3000

app.listen(port,() => { // Arrow function
    console.log(`Servidor rodando na porta ${port}`) // Cuidado com as aspas! É um sinal de CRASE!!!
})

app.get('/',(req, res) =>{

    res.send("Minha primeira rota! :)")

})

app.get('/teste',(req,res) =>{

    res.send("Meu primeiro teste")
})

app.get('/teste/oie', (req,res) =>{

    res.send("Meu primeiro oie")
})