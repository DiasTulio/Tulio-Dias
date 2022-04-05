import { connection } from "../connections";
import { Contato } from "../types";

export const insertContato = async(novoContato: Contato): Promise<any> => {
    await connection("Contatos")
    .insert(novoContato)
}