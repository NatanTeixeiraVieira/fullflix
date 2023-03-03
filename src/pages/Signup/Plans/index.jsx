import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { SignupContext } from '../../../contexts/Signup/SignupContext';
import ThemeSignup from '../../../components/ThemeSignup';
import Tr from '../../../components/PlansTr';
import './styles.css';

export default function Plans() {
  const { plan, changePlan, changeCurrentStep } = useContext(SignupContext);
  const navigate = useNavigate();

  useEffect(() => {
    changeCurrentStep(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectPlan = (evt) => {
    changePlan(evt.target.name);
  };
  const handleNextStep = () => {
    navigate('/signup/register');
  };
  return (
    <ThemeSignup>
      <div className="plans">
        <p className="steps">Passo 1 de 3</p>
        <h1 className="plans_title">Escolha o melhor plano para você</h1>
        <ul className="benefits">
          <li>
            <CheckIcon />
            Assista o quanto quiser
          </li>
          <li>
            <CheckIcon /> Recomendações especiais para você.
          </li>
          <li>
            <CheckIcon /> Altere ou cancele seu plano quando quiser.
          </li>
        </ul>
        <div className="plans_name">
          <div
            className="plan_basic"
            onClick={handleSelectPlan}
            style={plan === 'basic' ? { opacity: 1 } : { opacity: 0.6 }}
          >
            <input type="button" name="basic" className="identifier" />
            <span>Básico</span>
            <ArrowDropDownIcon />
          </div>
          <div
            className="plan_standard"
            onClick={handleSelectPlan}
            style={plan === 'standard' ? { opacity: 1 } : { opacity: 0.6 }}
          >
            <input type="button" name="standard" className="identifier" />
            <span>Padrão</span>
            <ArrowDropDownIcon />
          </div>
          <div
            className="plan_premium"
            onClick={handleSelectPlan}
            style={plan === 'premium' ? { opacity: 1 } : { opacity: 0.6 }}
          >
            <input type="button" name="premium" className="identifier" />
            <span>Premium</span>
            <ArrowDropDownIcon />
          </div>
        </div>
        <table className="table_plans">
          <tbody>
            <Tr
              description="Preço por mês"
              basic="R$21,90"
              standard="R$39,90"
              premium="R$55,90"
            />
            <Tr
              description="Qualidade do vídeo"
              basic="Boa"
              standard="Melhor"
              premium="Superior"
            />
            <Tr
              description="Resolução"
              basic="720p"
              standard="1080p"
              premium="4K+HDR"
            />
            <Tr
              description="Assista na TV, computador, celular ou tablet"
              basic={<CheckIcon />}
              standard={<CheckIcon />}
              premium={<CheckIcon />}
            />
            <Tr
              description="Downloads"
              basic={<CheckIcon />}
              standard={<CheckIcon />}
              premium={<CheckIcon />}
            />
          </tbody>
        </table>
        <div className="buttons">
          <button
            type="button"
            className="button-next_page"
            onClick={handleNextStep}
          >
            Próximo
          </button>
        </div>
      </div>
    </ThemeSignup>
  );
}
