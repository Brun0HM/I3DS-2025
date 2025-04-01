import { Link } from "react-router";

const NaoEncontrado = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Página não encontrada</h2>
      <p className="lead">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NaoEncontrado;