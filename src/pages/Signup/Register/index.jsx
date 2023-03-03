import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeSignup from '../../../components/ThemeSignup';
import { SignupContext } from '../../../contexts/Signup/SignupContext';
import './styles.css';

export default function Register() {
  const {
    name,
    email,
    password,
    changeCurrentStep,
    changeName,
    changeEmail,
    changePassword,
  } = useContext(SignupContext);
  const navigate = useNavigate();

  useEffect(() => {
    changeCurrentStep(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeName = (evt) => {
    changeName(evt.target.value);
  };
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    changePassword(evt.target.value);
  };
  const handleBackStep = () => {
    navigate('/signup/plans');
  };
  const handleNextStep = () => {
    if (name !== '' && email !== '' && password !== '') {
      navigate('/signup/confirmation');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <ThemeSignup>
      <div className="register">
        <div className="register-content">
          <p className="steps">Passo 2 de 3</p>
          <h1 className="register_title">
            Digite seu nome de usuário, email e crie uma senha para iniciar sua
            assinatura
          </h1>
          <form className="register-form">
            <input
              type="text"
              placeholder="Nome de usuário"
              className="input_user_name"
              value={name}
              onChange={handleChangeName}
            />
            <input
              type="email"
              placeholder="Email"
              className="input_email"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              className="input_password"
              onChange={handleChangePassword}
            />
            <div className="buttons">
              <button
                type="button"
                className="button_back"
                onClick={handleBackStep}
              >
                Voltar
              </button>
              <button
                type="button"
                className="button_next_page"
                onClick={handleNextStep}
              >
                Próximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </ThemeSignup>
  );
}
