import React, { useState } from "react";
import axios from "axios";

const useCliente = () => {
  const URL = "https://localhost:7121/api/Clientes";
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({nome:"", email:"", telefone:"", senha:""})
  
  const handleInputChange = e => {
    setCliente({...cliente,[e.target.name]: e.target.value})
  }
  
  const cadastrarCliente = () => {
    axios.post(URL,cliente)
  };

  const listarClientes = async () => {
    axios
      .get(URL)
      .then((res) => {
        setClientes(res.data);
      })
      .catch((erro) => console.log(erro));
  };
  return {
    clientes,
    listarClientes,
    cliente,
    handleInputChange,
    cadastrarCliente
  };
};

export default useCliente;
