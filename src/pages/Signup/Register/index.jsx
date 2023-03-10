import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import ThemeSignup from '../../../components/ThemeSignup';
import { SignupContext } from '../../../contexts/Signup/SignupContext';
import Error from '../../../components/Error';
import validateEmail from '../../../utils/validations';
import './styles.css';

const validationSchema = yup.object({
  name: yup.string().required('O nome é obrigatório.').trim(),
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

export default function Register() {
  const {
    name,
    email,
    password,
    changeCurrentStep,
    changeAllInputValuesOnRegister,
    changeRegisterIsValid,
  } = useContext(SignupContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    changeCurrentStep(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    watch((value) => {
      changeAllInputValuesOnRegister(value);
    });
  }, [watch, changeAllInputValuesOnRegister]);

  const onSubmit = () => {
    changeRegisterIsValid();
    navigate('/signup/confirmation');
  };
  const handleBackStep = () => {
    navigate('/signup/plans');
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
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              value={name}
              placeholder="Nome de usuário"
              className="input_user_name"
              style={
                errors.name ? { border: '1px solid red' } : { border: 'none' }
              }
              {...register('name')}
            />
            {errors?.name?.message && <Error>{errors.name.message}</Error>}
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="input_email"
              style={
                errors.email ? { border: '1px solid red' } : { border: 'none' }
              }
              {...register('email')}
            />
            {errors?.email?.message && <Error>{errors.email.message}</Error>}

            <input
              type="password"
              value={password}
              placeholder="Senha"
              className="input_password"
              style={
                errors.password
                  ? { border: '1px solid red' }
                  : { border: 'none' }
              }
              {...register('password')}
            />
            {errors?.password?.message && (
              <Error>{errors.password.message}</Error>
            )}

            <div className="buttons">
              <button
                type="button"
                className="button_back"
                onClick={handleBackStep}
              >
                Voltar
              </button>
              <button type="submit" className="button_next_page">
                Próximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </ThemeSignup>
  );
}
