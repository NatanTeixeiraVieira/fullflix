import { Link } from 'react-router-dom';

import './styles.css';

export default function Error404() {
  return (
    <div className="error404">
      <header>
        <div className="site_name">
          <Link to="/">Fullflix</Link>
        </div>
      </header>

      <h1>Você se perdeu?</h1>
      <p className="description">
        Esta página não foi encontrada. Pressione o botão abaixo para retornar à
        página inicial.
      </p>
      <Link to="/" className="return_to_initial_page">
        Página inicial
      </Link>
      <p>
        <strong>Erro 404</strong>
      </p>
    </div>
  );
}
