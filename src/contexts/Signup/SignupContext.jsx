import { createContext, useCallback, useMemo, useReducer } from 'react';
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

  const changePlan = useCallback(
    (plan) => {
      dispatch({ type: setPlan, payload: plan });
    },
    [setPlan]
  );
  const changeCurrentStep = useCallback(
    (step) => {
      dispatch({ type: setCurrentStep, payload: step });
    },
    [setCurrentStep]
  );
  const changeAllInputValuesOnRegister = useCallback(
    (datas) => {
      dispatch({ type: setAllInputValuesOnRegister, payload: datas });
    },
    [setAllInputValuesOnRegister]
  );
  const changeRegisterIsValid = useCallback(() => {
    dispatch({ type: setRegisterIsValid });
  }, [setRegisterIsValid]);
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
      changePlan,
      changeCurrentStep,
      changeAllInputValuesOnRegister,
      changeRegisterIsValid,
      subscribe,
    }),
    [
      state,
      changePlan,
      changeCurrentStep,
      changeAllInputValuesOnRegister,
      changeRegisterIsValid,
      subscribe,
    ]
  );

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}
