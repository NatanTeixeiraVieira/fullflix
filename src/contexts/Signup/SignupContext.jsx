import { createContext, useReducer } from 'react';
import reducer from './signupReducer';
import SignupActions from './signupActions';

const initialState = {
  currentStep: 0,
  name: '',
  email: '',
  password: '',
  plan: 'premium',
  registerIsValid: false,
};

export const SignupContext = createContext();

export function SignupContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    setCurrentStep,
    setAllInputValuesOnRegister,
    setPlan,
    setRegisterIsValid,
  } = SignupActions;

  const changePlan = (plan) => {
    dispatch({ type: setPlan, payload: plan });
  };
  const changeCurrentStep = (step) => {
    dispatch({ type: setCurrentStep, payload: step });
  };
  const changeAllInputValuesOnRegister = (datas) => {
    dispatch({ type: setAllInputValuesOnRegister, payload: datas });
  };
  const changeRegisterIsValid = () => {
    dispatch({ type: setRegisterIsValid });
  };
  const subscribe = () => {
    const id = Date.now();
    const userDatas = {
      id,
      name: state.name,
      email: state.email,
      password: state.password,
      plan: state.plan,
    };
    localStorage.setItem(state.email, JSON.stringify(userDatas));
    localStorage.setItem('isLogged', state.email);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    ...state,
    changePlan,
    changeCurrentStep,
    changeAllInputValuesOnRegister,
    changeRegisterIsValid,
    subscribe,
  };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}
