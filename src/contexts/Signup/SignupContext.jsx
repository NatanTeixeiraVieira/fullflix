import { createContext, useCallback, useMemo, useReducer } from 'react';

import {
  SET_ALL_INPUT_VALUES_ON_REGISTER,
  SET_CURRENT_STEP,
  SET_PLAN,
  SET_REGISTER_IS_VALID,
} from './signupActions';
import reducer from './signupReducer';

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

  const setPlan = useCallback((plan) => {
    dispatch({ type: SET_PLAN, payload: plan });
  }, []);
  const setCurrentStep = useCallback((step) => {
    dispatch({ type: SET_CURRENT_STEP, payload: step });
  }, []);
  const setAllInputValuesOnRegister = useCallback((datas) => {
    dispatch({ type: SET_ALL_INPUT_VALUES_ON_REGISTER, payload: datas });
  }, []);
  const setRegisterIsValid = useCallback(() => {
    dispatch({ type: SET_REGISTER_IS_VALID });
  }, []);
  const subscribe = useCallback(() => {
    const validateDateAndTime = (date) => (date < 10 ? `0${date}` : date);

    const id = Date.now();
    const subscribeDayOfMounth = new Date().getDate();
    const subscribeMounth = new Date().getMonth() + 1;
    const subscribeYear = new Date().getFullYear();
    const subscribeHours = new Date().getHours();
    const subscribeMinutes = new Date().getMinutes();
    const subscribeSeconds = new Date().getSeconds();

    const userDatas = {
      id,
      name: state.name,
      email: state.email,
      password: state.password,
      plan: state.plan,
      subscribeDate: `${validateDateAndTime(
        subscribeDayOfMounth
      )}/${validateDateAndTime(subscribeMounth)}/${subscribeYear} `,
      subscribeTime: `${validateDateAndTime(
        subscribeHours
      )}:${validateDateAndTime(subscribeMinutes)}:${validateDateAndTime(
        subscribeSeconds
      )}`,
    };
    localStorage.setItem(state.email, JSON.stringify(userDatas));
    localStorage.setItem('isLogged', state.email);
  }, [state.email, state.name, state.password, state.plan]);

  const value = useMemo(
    () => ({
      ...state,
      setPlan,
      setCurrentStep,
      setAllInputValuesOnRegister,
      setRegisterIsValid,
      subscribe,
    }),
    [
      state,
      setPlan,
      setCurrentStep,
      setAllInputValuesOnRegister,
      setRegisterIsValid,
      subscribe,
    ]
  );

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}
