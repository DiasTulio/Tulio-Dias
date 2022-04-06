const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "mah0u:SV!",
    database: "projetocmu",
});

app.use(cors());
app.use(express.json());

app.post("/cadastro", (req, res) => {
    const {nome} = req.body;
    const {apelido} = req.body;
    const {empresa} = req.body;
    const {cargo} = req.body;
    const {endereço} = req.body;
    const {email} = req.body;
    const {fone} = req.body;
    const {data } = req.body

    let SQL = "INSERT INTO contatos ( nome, apelido, empresa, cargo, endereço, email, fone, data) VALUES ( ?,?,?,?,?,?,?,? )";

    db.query(SQL, [nome, apelido, empresa, cargo, endereço, email, fone, data], (err, result) => {
        console.log(err);
    })
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from contatos";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const {id} = req.body;
    const {nome} = req.body;
    const {apelido} = req.body;
    const {empresa} = req.body;
    const {cargo} = req.body;
    const {endereço} = req.body;
    const {email} = req.body;
    const {fone} = req.body;
    const {data} = req.body;

    let SQL = "UPDATE contatos SET name = ?, apelido = ?, empresa = ?, cargo = ?, endereço = ?, email = ?, fone = ?, data = ?  WHERE idContatos = ?";

    db.query(SQL, [nome, apelido, empresa, cargo, endereço, email, fone, data], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    let SQL = "DELETE FROM contatos WHERE idContatos = ?";
    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Servidor Rodando");
})