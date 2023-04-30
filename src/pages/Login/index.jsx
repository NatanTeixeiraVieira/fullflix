import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './styles.css';
import validateEmail from '../../utils/validations';
import Error from '../../components/Error';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('O email é obrigatório.')
    .email('Email inválido.')
    .matches(validateEmail, 'Email inválido.'),
  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(6, 'A senha deve ter entre 6 e 60 caracteres.')
    .max(60, 'A senha deve ter entre 6 e 60 caracteres.'),
});

export default function Login() {
  const { signin } = useContext(AuthContext);
  const [loginIsInvalid, setLoginIsInvalid] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const navigate = useNavigate();

  const onSubmit = (value) => {
    if (signin(value)) {
      navigate('/');
      window.location.reload();
      return;
    }
    setLoginIsInvalid(true);
  };
  return (
    <div className="login">
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Entre ou cadastre-se</h1>
        {loginIsInvalid && (
          <div className="login_error">Login ou senha inválidos.</div>
        )}
        <div className="login_inputs_and_button">
          <input
            type="email"
            className="email"
            placeholder="Email"
            style={
              errors.email ? { border: '1px solid red' } : { border: 'none' }
            }
            {...register('email')}
          />
          {errors?.email?.message && <Error>{errors.email.message}</Error>}
          <input
            type="password"
            placeholder="Senha"
            style={
              errors.password ? { border: '1px solid red' } : { border: 'none' }
            }
            {...register('password')}
          />
          {errors?.password?.message && (
            <Error>{errors.password.message}</Error>
          )}
          <button type="submit">Entrar</button>
        </div>
        <div className="signup">
          <span>É novo no Fullflix?</span>
          <Link to="/signup/plans">Cadastre-se agora</Link>
        </div>
      </form>
    </div>
  );
}
