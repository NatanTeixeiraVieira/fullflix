import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeSignup from '../../../components/ThemeSignup';
import { SignupContext } from '../../../contexts/Signup/SignupContext';
import './styles.css';

export default function Confirmation() {
  const { name, email, password, plan, setCurrentStep, subscribe } =
    useContext(SignupContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentStep(3);
  }, [setCurrentStep]);

  const handleBackStep = () => {
    navigate('/signup/register');
  };
  const handleSubscribe = () => {
    subscribe();
    navigate('/');
  };

  return (
    <ThemeSignup>
      <div className="confirmation">
        <div className="content">
          <p className="steps">Passo 3 de 3</p>
          <h1 className="confirmation_title">
            Por favor, verifique se todas as informações estão corretas.
          </h1>
          <ul className="user_info">
            <li>
              <strong>Nome de usuário:</strong> {name}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Senha:</strong> {password}
            </li>
            <li>
              <strong>Plano:</strong> {plan[0].toUpperCase()}
              {plan.slice(1)}
            </li>
          </ul>
          <div className="buttons">
            <button
              type="button"
              className="button_back"
              onClick={handleBackStep}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="subscribe"
              onClick={handleSubscribe}
            >
              Assinar
            </button>
          </div>
        </div>
      </div>
    </ThemeSignup>
  );
}
