const express = require("express");

const app = express();

app.use(express.json());

const contatos = []

//adicionar um contato.
app.post("/contatos", (req, res) => {
    const Contato = { nome, apelido, aniversario, endereço, empresa, cargo, observações } = req.body
    contatos.push(Contato);

    return res.json(contatos);
});

//listar um contato.    
app.get("/contatos/:index", (req, res) => {
    const {index} = req.params;

    return res.json(contatos[index]);
});

//listar todos os contatos.
app.get("/contatos", (req, res) => {
    return res.json(contatos)
});

//atualizar contatos.
app.put("/contatos/:index", (req, res) => {
    const { index } = req.params;
    const { nome, apelido, aniversario, endereço, empresa, cargo, observações } = req.body;

    contatos[index] = nome, apelido, aniversario, endereço, empresa, cargo, observações;
    return res.json(contatos);

});

//remover contatos.
app.delete("/contatos/:index", (req, res) => {
    const { index } = req.params;
    contatos.splice(index, 1);
    return res.json({message: "Contato deletado com suscesso!"});
});

app.listen(3000);