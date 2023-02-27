import { createContext, useState } from 'react';

export const HeaderContext = createContext();

export function HeaderContextProvider({ children }) {
  const [hidden, setHidden] = useState(false);

  const hideHeaderPart = () => {
    setHidden(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <HeaderContext.Provider value={{ hidden, hideHeaderPart }}>
      {children}
    </HeaderContext.Provider>
  );
}
