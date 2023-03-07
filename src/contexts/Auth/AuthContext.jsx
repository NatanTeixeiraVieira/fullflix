import { createContext } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const signin = ({ email, password }) => {
    const user = JSON.parse(localStorage.getItem(email));
    if (user?.password === password) {
      localStorage.setItem('isLogged', user.email);
      return true;
    }
    return false;
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ signin }}>{children}</AuthContext.Provider>
  );
}
