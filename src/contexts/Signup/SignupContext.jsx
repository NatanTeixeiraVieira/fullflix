import { createContext, useReducer } from 'react';
import reducer from './signupReducer';
import SignupActions from './signupActions';

const initialState = {
  currentStep: 0,
  name: '',
  email: '',
  password: '',
  plan: 'premium',
};

export const SignupContext = createContext();

export function SignupContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { setCurrentStep, setName, setEmail, setPassword, setPlan } =
    SignupActions;

  const changePlan = (plan) => {
    dispatch({ type: setPlan, payload: plan });
  };
  const changeCurrentStep = (step) => {
    dispatch({ type: setCurrentStep, payload: step });
  };
  const changeName = (name) => {
    dispatch({ type: setName, payload: name });
  };
  const changeEmail = (email) => {
    dispatch({ type: setEmail, payload: email });
  };
  const changePassword = (password) => {
    dispatch({ type: setPassword, payload: password });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    ...state,
    changePlan,
    changeCurrentStep,
    changeName,
    changeEmail,
    changePassword,
  };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}
