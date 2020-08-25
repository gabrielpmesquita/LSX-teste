// Muitos chamam esse arquivo de index.js

const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose') // Módulo 8

const app = express()

let port = 3000

app.listen(port,() => { // Arrow function
    console.log(`Servidor rodando na porta ${port}`) // Cuidado com as aspas! É um sinal de CRASE!!!
})

mongoose.connect("mongodb+srv://LSX-teste:!123456@cluster0.pdztz.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true })

app.use(bodyParser.json())


// O Postman é uma ferramenta de debug, mas ele é responsável por simbolizar o nosso cliente da aplicação.
// Agora veremos alguns outros verbos HTTPs. Agora será o CRUD de usuários (Verbos: GET, POST, DELETE, PUT)
// CRUD -> Create; Read; Update; Delete.

// GET -> Default, responsável por trazer alguma informação
// POST -> responsável por criar algo
// PUT -> responsável por atualizar algo
// DELETE -> responsável por deletar algo

const users = {



}
//  users['GABRIEL'] = { idade: 22, cidade:"SP"}

/*
app.get('/',(req, res) =>{

    res.json({users})

})

app.post('/',(req, res) =>{
    const { nome, cidade, idade } = req.body

    users[nome] = { cidade, idade, nome }

    res.json({msg:"Usuário criado com sucesso!"})

})

app.put('/:nome',(req, res) =>{
    const { nome } = req.params
    const { cidade, idade } = req.body

    users[nome] = { cidade, idade, nome }
    res.json("Usuário editado.")

})

app.delete('/:nome',(req, res) =>{

    const { nome } = req.params;
    delete users[nome]

    res.json("Usuário deletado com sucesso!")

})
*/


// ============================================================= MÓDULO 08 ====================================================================

// MongoDB -> banco de dados

const User = require("./src/models/User")

app.post('/',async(req, res) =>{

    const { nome, cidade, idade } = req.body
    const user = await User.create({ nome, cidade, idade })

    res.json({user})

})