import { createContext, useMemo } from 'react';

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

  const value = useMemo(() => ({ signin }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
