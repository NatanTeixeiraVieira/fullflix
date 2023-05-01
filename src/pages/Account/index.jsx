import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const logout = window.confirm('Tem certeza que deseja sair da sua conta?');
    if (logout) {
      localStorage.removeItem('isLogged');
      navigate('/login');
    }
  };
  const handleCancelPlan = () => {
    const cancelPlan = window.confirm(
      'Tem certeza que deseja cancelar seu plano?'
    );
    if (cancelPlan) {
      localStorage.clear();
      navigate('/login');
    }
  };

  const userEmail = localStorage.getItem('isLogged');
  const userInfo = JSON.parse(localStorage.getItem(userEmail));

  return (
    <div className="account">
      <div className="content">
        <div className="title_and_subscription_date">
          <h1>Conta</h1>
          <span>
            Membro desde {userInfo.subscribeDate} {userInfo.subscribeTime}
          </span>
        </div>
        <div className="personal_and_account_info">
          <div className="title_and_button_cancel_plan">
            <h2>Informações pessoais e da conta</h2>
            <button
              type="button"
              className="cancel_plan"
              onClick={handleCancelPlan}
            >
              Cancelar plano
            </button>
          </div>
          <div className="person_and_account">
            <div className="personal_info">
              <div className="email_and_password_info">
                <p className="email">
                  <span>Email: </span> {userEmail}
                </p>
                <p>
                  <span>Senha: </span> {[...userInfo.password].map(() => '*')}
                </p>
              </div>
              <div className="options">
                <button type="button" className="button_action change_email">
                  Mudar email
                </button>
                <button type="button" className="button_action">
                  Mudar Senha
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="plan_details">
          <h2>Detalhes do plano</h2>
          <div className="plan_and_change_plan">
            <span>
              {userInfo.plan[0].toUpperCase()}
              {userInfo.plan.slice(1)}
            </span>
            <button type="button" className="button_action">
              Mudar plano
            </button>
          </div>
        </div>
        <div className="settings">
          <h2>Configurações</h2>
          <button
            type="button"
            className="button_action"
            onClick={handleLogout}
          >
            Sair da conta
          </button>
        </div>
      </div>
    </div>
  );
}
