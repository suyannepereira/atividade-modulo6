import useDestino from "@/hooks/useDestino";
import React, { useEffect } from "react";

const Destino = () => {
  const { destinos, listarDestinos } = useDestino();

  useEffect(() => {
    console.log("api: >>>>");
    listarDestinos();
  }, []);

  return (
    <div className="table-responsive mt-3">
      <table className="table table-hover table-info table-striped">
        <thead className="table-info">
          <tr>
            <th className="col">Id</th>
            <th className="col">Nome</th>
            <th className="col">Preço</th>
            <th className="col">Data</th>
          </tr>
        </thead>
        <tbody>
          {destinos.map(({ id, nome, preco, data }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>{nome}</td>
              <td>{preco}</td>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Destino;
