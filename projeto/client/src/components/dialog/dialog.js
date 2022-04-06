import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        nome: props.nome,
        apelido: props.apelido,
        cargo: props.cargo,
        endereço: props.endereço,
        email: props.email,
        fone: props.fone,
        data: props.data
    });

    const handleEditContato = () => {
        Axios.put("http://localhost:3001/edit",{
            id: editValues.id,
            nome: editValues.nome,
            apelido: editValues.apelido,
            empresa: editValues.empresa,
            cargo: editValues.cargo,
            endereço: editValues.endereço,
            email: editValues.email,
            fone: editValues.fone,
            data: editValues.data
        });
        handleClose();
    };

    const handleDeleteContato = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
    };

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChangeValues = value => {
        setEditValues(prevValues=> ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }))
    };


  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            defaultValue={props.nome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="apelido"
            label="Apelido"
            defaultValue={props.apelido}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="empresa"
            label="Empresa"
            defaultValue={props.empresa}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cargo"
            label="Cargo"
            defaultValue={props.cargo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="endereço"
            label="Endereço"
            defaultValue={props.endereço}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            defaultValue={props.email}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="fone"
            label="Telefone"
            defaultValue={props.fone}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="data"
            label="Aniversário"
            defaultValue={props.data}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteContato()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditContato()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}