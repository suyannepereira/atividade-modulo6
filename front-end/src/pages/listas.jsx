import { tabelas } from "@/constants/data";
import useCliente from "@/hooks/useCliente";
import React, { useEffect, useState } from "react";
import Cliente from "./cliente";
import Destino from "./destino";
import Compra from "./compra";

const listas = () => {
  const { clientes, listarClientes } = useCliente();
  const [tabela, setTabela] = useState(tabelas[0].nome);
  useEffect(() => {
    console.log("api: >>>>");
    listarClientes();
  }, []);

  return (
    <main className="flex-grow-1 container">
      <select
        className="text-capitalize"
        onChange={(e) => setTabela(e.target.value)}
      >
        {tabelas.map(({ nome }, i) => (
          <option value={nome}>{nome}</option>
        ))}
      </select>
      <h1>Lista de {tabela}s</h1>
      {tabela === "cliente" && <Cliente />}
      {tabela === "destino" && <Destino />}
      {tabela === "compra" && <Compra />}
    </main>
  );
};

export default listas;
