import { useContext } from 'react';
import { SignupContext } from '../contexts/Signup/SignupContext';

const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('O useContext precisa ser usado dentro do contexto.');
  }
  return context;
};
export default useSignup;
