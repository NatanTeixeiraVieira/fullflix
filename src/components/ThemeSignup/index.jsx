import { useContext } from 'react';
import { SignupContext } from '../../contexts/Signup/SignupContext';
import SignupItem from '../SignupItem';
import './styles.css';

export default function ThemeSignup({ children }) {
  const { currentStep, registerIsValid } = useContext(SignupContext);

  const handleRegisterIsValid = () => {
    if (!registerIsValid) {
      alert('Para acessar este passo é necessário preencher o cadastro.');
    }
  };

  return (
    <div className="theme_signup">
      <hr className="header_underline" />
      <section className="signup_steps">
        <SignupItem
          title="Planos"
          description="Escolha seu plano"
          icon="plans"
          path="/signup/plans"
          active={currentStep === 1}
        />
        <SignupItem
          title="Cadastro"
          description="Crie um cadastro"
          icon="register"
          path="/signup/register"
          active={currentStep === 2}
        />
        <SignupItem
          title="Confirmação"
          description="Confirme as informações de cadastro"
          icon="confirmation"
          path={registerIsValid && '/signup/confirmation'}
          active={currentStep === 3}
          onclick={handleRegisterIsValid}
        />
      </section>
      <section className="page">{children}</section>
    </div>
  );
}
