import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as yup from 'yup';

import Error from '../../components/Error';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import validateEmail from '../../utils/validations';

import './styles.css';

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
  const [isPassword, setIsPassword] = useState(true);
  const inputPasswordRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: '', password: '' },
  });
  const navigate = useNavigate();

  const onSubmit = (value) => {
    if (signin(value)) {
      navigate('/');
      return;
    }
    setLoginIsInvalid(true);
  };

  const handleIsPassword = () => {
    setIsPassword((prev) => !prev);
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
          <div
            className="password_and_icon_visibility"
            style={
              errors.password ? { border: '1px solid red' } : { border: 'none' }
            }
          >
            <input
              type={isPassword ? 'password' : 'text'}
              placeholder="Senha"
              className="password"
              ref={inputPasswordRef}
              {...register('password')}
            />
            {dirtyFields.password && (
              <div className="visibility_icon" onClick={handleIsPassword}>
                {isPassword && <VisibilityIcon fontSize="inherit" />}
                {!isPassword && <VisibilityOffIcon fontSize="inherit" />}
              </div>
            )}
          </div>
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
