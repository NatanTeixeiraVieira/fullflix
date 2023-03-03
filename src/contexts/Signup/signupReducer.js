import SignupActions from './signupActions';

const modalReducer = (state, action) => {
  const { setCurrentStep, setName, setEmail, setPassword, setPlan } =
    SignupActions;
  switch (action.type) {
    case setCurrentStep:
      return { ...state, currentStep: action.payload };
    case setName:
      return { ...state, name: action.payload };
    case setEmail:
      return { ...state, email: action.payload };
    case setPassword:
      return { ...state, password: action.payload };
    case setPlan:
      return { ...state, plan: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
