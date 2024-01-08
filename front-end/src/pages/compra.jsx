import useCompra from "@/hooks/useCompra";
import React, { useEffect } from "react";

const Compra = () => {
  const { compras, listarCompras } = useCompra();

  useEffect(() => {
    console.log("api: >>>>");
    listarCompras();
  }, []);

  return (
    <div className="table-responsive mt-3">
      <table className="table table-hover table-info table-striped">
        <thead className="table-info">
          <tr>
            <th className="col">Id</th>
            <th className="col">Data</th>
            <th className="col">Total</th>
            <th className="col">Cliente</th>
            <th className="col">Destino</th>
          </tr>
        </thead>
        <tbody>
          {compras.map(({ id, data, total, clientes, destinos }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>{data}</td>
              <td>{total}</td>
              <td>{clientes.nome}</td>
              <td>{destinos.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Compra;
