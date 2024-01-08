import axios from "axios";
import React, { useState } from "react";

const useCompra = () => {
  const URL = "https://localhost:7121/api/Compras";
  const [compras, setCompras] = useState([]);

  const cadastrarCompra = () => {};

  const listarCompras = async () => {
    axios
      .get(URL)
      .then((res) => {
        setCompras(res.data);
      })
      .catch((erro) => console.log(erro));
  };
  return {
    compras,
    listarCompras,
  };
};

export default useCompra;
