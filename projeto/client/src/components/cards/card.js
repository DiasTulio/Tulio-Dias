import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };


    return (
        <>
        <FormDialog open={open} setOpen={setOpen} 
            nome={props.nome}
            apelido={props.apelido}
            empresaa={props.empresa} 
            cargo={props.cargo} 
            endereço={props.endereço} 
            email={props.email} 
            fone={props.fone} 
            data={props.data}
            listCard={props.listCard}
            setListCard={props.setListCard}
            id={props.id}
            />
        <div className="card--container" onClick={() =>
        handleClickCard()}>
            <h3 className="card--nome">{props.nome}</h3>
            <p className="card--apelido">{props.apelido}</p>
            <p className="card--empresa">{props.empresa}</p>
            <p className="card--cargo">{props.cargo}</p>
            <p className="card--endereço">{props.endereço}</p>
            <p className="card--email">{props.email}</p>
            <p className="card--fone">{props.fone}</p>
            <p className="card--data">{props.data}</p>
        </div>
        </>
    );
}