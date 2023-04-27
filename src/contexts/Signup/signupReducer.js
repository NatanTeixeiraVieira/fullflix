import {
  SET_ALL_INPUT_VALUES_ON_REGISTER,
  SET_CURRENT_STEP,
  SET_PLAN,
  SET_REGISTER_IS_VALID,
} from './signupActions';

const modalReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case SET_ALL_INPUT_VALUES_ON_REGISTER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password.trim(),
      };
    case SET_PLAN:
      return { ...state, plan: action.payload };
    case SET_REGISTER_IS_VALID:
      return { ...state, registerIsValid: true };
    default:
      return state;
  }
};

export default modalReducer;
