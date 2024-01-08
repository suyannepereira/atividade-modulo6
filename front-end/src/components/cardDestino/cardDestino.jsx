import React from "react";

const CardDestino = ({ destino }) => {
  const { imagem, nome, texto, valor } = destino;
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imagem} className="card-img-top" alt="Imagem 1" />
        <div className="card-body">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text">{texto}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="rating">
              <span className="text-warning">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
            <h3 className="text-primary">R${valor}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDestino;
