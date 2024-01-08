import axios from "axios";
import React, { useState } from "react";

const useDestino = () => {
  const URL = "https://localhost:7121/api/Destinos";
  const [destinos, setDestinos] = useState([]);

  const cadastrarDestino = () => {};

  const listarDestinos = async () => {
    axios
      .get(URL)
      .then((res) => {
        setDestinos(res.data);
      })
      .catch((erro) => console.log(erro));
  };
  return {
    destinos,
    listarDestinos,
  };
};

export default useDestino;
