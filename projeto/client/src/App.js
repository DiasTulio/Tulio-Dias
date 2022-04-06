import React, {useState, useEffect} from "react"
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card";

function App() {
  const [values, setValues] = useState();
  const [listContatos, setListContatos] = useState();
  
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClick = () => {
    Axios.post("http://localhost:3001/cadastro", {
      nome: values.nome,
      apelido: values.apelido,
      empresa: values.empresa,
      cargo: values.cargo,
      endereço: values.endereço,
      email: values.email,
      fone: values.fone,
      data: values.data
    }).then((response) => {
      console.log(response)
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListContatos(response.data);
    });
  }, []);

  return (
    <div className="app--container">
      <div className="resgister--container">
        <h1 className="register--title">Agenda</h1>
        <input type="text" name="nome" placeholder="Nome" className="register--input" onChange={handleChangeValues}
        />
        <input type="text" name="apelido" placeholder="Apelido" className="register--input" onChange={handleChangeValues} 
        />
        <input type="text" name="empresa" placeholder="Empresa" className="register--input" onChange={handleChangeValues}
        />
        <input type="text" name="cargo" placeholder="Cargo" className="register--input" onChange={handleChangeValues}
        />
        <input type="text" name="endereço" placeholder="Endereço" className="register--input" onChange={handleChangeValues}
        />
        <input type="text" name="email" placeholder="E-mail" className="register--input" onChange={handleChangeValues}
        />
        <input type="text" name="fone" placeholder="Telefone" className="register--input" onChange={handleChangeValues}
        />
        <input type="text" name="data" placeholder="Aniversário" className="register--input" onChange={handleChangeValues}
        />
        <button className="register--button" onClick={() => handleClick()}>Cadastrar
        </button>
      </div>
      { typeof listContatos !== "undefined" && listContatos.map((value) => {
        return (
        <Card 
        key={value.id} 
        listCard={listContatos}
        setListCard={setListContatos} 
        id={value.idContatos}
        nome={value.nome}
        apelido={value.apelido}
        empresa={value.empresa}
        cargo={value.cargo}
        endereço={value.endereço}
        email={value.email}
        fone={value.fone}
        data={value.data}
        ></Card>
      );
      })}
    </div>

  );
}

export default App;
