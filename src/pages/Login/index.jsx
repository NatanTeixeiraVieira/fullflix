import { Link } from 'react-router-dom';
import './styles.css';

export default function Login() {
  return (
    <div className="login">
      <form className="login_form">
        <h1>Entre ou cadastre-se</h1>
        <div className="login_inputs_and_button">
          <input type="email" className="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </div>
        <div className="signup">
          É novo no Fullflix?
          <Link to="/signup">Cadastre-se agora</Link>
        </div>
      </form>
    </div>
  );
}
