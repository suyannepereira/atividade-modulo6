import { CardPromocoes } from "@/components";
import { promocoesLista } from "@/constants/data";
import React from "react";

const promocoes = () => {
  return (
    <main>
      <h1 className="text-center p-4 titulo-pages">Promoções</h1>
      <div className="container mt-5">
        <div className="row">
          {promocoesLista.map((promocao, i) => (
            <CardPromocoes key={i} promocao={promocao} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default promocoes;
