const Contato = () => {
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Entre em Contato</h2>
        <p className="lead">
          Estamos aqui para ajudar! Preencha o formulário abaixo ou entre em
          contato conosco através das informações fornecidas.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">
              Mensagem
            </label>
            <textarea
              className="form-control"
              id="mensagem"
              rows="4"
              placeholder="Digite sua mensagem"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    );
  };
  
  export default Contato;