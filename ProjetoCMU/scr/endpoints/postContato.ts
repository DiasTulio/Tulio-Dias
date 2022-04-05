import { Request, Response } from "express";
import { insertContato } from "../data/insertContato";
import { Contato } from "../types";
 
export const postContato = async(req: Request, res: Response): Promise<any> => {
    try {
    let { id, nome, aniversario, apelido, empresa, cargo, telefone, email, endereço, obersevaçoes} = req.body
    if ( !nome ) {
        res.status(400).send({message: "Nome necessário para crição."})
            return
    }

    const novoContato: Contato = { id, nome, aniversario, apelido, empresa, cargo, telefone, email, endereço, obersevaçoes }

    await insertContato(novoContato)
    res.status(201).send({message: "Contato adicionado com suscesso!"})
    } catch (error) {
        res.send({error: error.message || error.sqlMessage})
    }