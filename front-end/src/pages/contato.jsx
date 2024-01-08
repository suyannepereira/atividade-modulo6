import React from 'react'

const contato = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="image/contato-formulario.png"
            alt="Imagem"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Entre em contato</h2>
          <form>
            <div className="form-group">
              <label for="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="form-group">
              <label for="mensagem">Mensagem</label>
              <textarea
                className="form-control"
                id="mensagem"
                rows="5"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info text-white">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contato