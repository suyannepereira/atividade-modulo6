import useCliente from "@/hooks/useCliente";
import React from "react";

const cadastro = () => {
const{cliente,cadastrarCliente,handleInputChange} = useCliente()
const {nome, email, telefone, senha} = cliente
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form>
            <h2>Cadastre-se</h2>
            <div className="mb-3">
              <label for="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                onChange={handleInputChange}
                value={nome}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Digite seu email"
                onChange={handleInputChange}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label for="telefone" className="form-label">
                Telefone
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefone"
                name="telefone"
                placeholder="Digite seu telefone"
                onChange={handleInputChange}
                value={telefone}
              />
            </div>
            <div className="mb-3">
              <label for="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                name="senha"
                placeholder="Senha"
                onChange={handleInputChange}
                value={senha}
              />
            </div>
            <button type="submit" className="btn btn-info text-white" onClick={cadastrarCliente}>
              Cadastrar
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <img
            src="image/cadastro.png"
            className="img-fluid"
            alt="Imagem de fundo"
          />
        </div>
      </div>
    </div>
  );
};

export default cadastro;
