import SignupActions from './signupActions';

const modalReducer = (state, action) => {
  const {
    setCurrentStep,
    setAllInputValuesOnRegister,
    setPlan,
    setRegisterIsValid,
  } = SignupActions;
  switch (action.type) {
    case setCurrentStep:
      return { ...state, currentStep: action.payload };
    case setAllInputValuesOnRegister:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password.trim(),
      };
    case setPlan:
      return { ...state, plan: action.payload };
    case setRegisterIsValid:
      return { ...state, registerIsValid: true };
    default:
      return state;
  }
};

export default modalReducer;
