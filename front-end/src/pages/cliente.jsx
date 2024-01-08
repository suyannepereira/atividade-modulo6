import useCliente from "@/hooks/useCliente";
import React, { useEffect } from "react";

const Cliente = () => {
  const { clientes, listarClientes } = useCliente();

  useEffect(() => {
    console.log("api: >>>>");
    listarClientes();
  }, []);

  return (
    <div className="table-responsive mt-3">
      <table className="table table-hover table-info table-striped">
        <thead className="table-info">
          <tr>
            <th className="col">Id</th>
            <th className="col">Nome</th>
            <th className="col">Email</th>
            <th className="col">Telefone</th>
            <th className="col">Senha</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(({ id, nome, email, telefone, senha }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>{nome}</td>
              <td>{email}</td>
              <td>{telefone}</td>
              <td>{senha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cliente;
