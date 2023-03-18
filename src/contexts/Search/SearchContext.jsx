import { createContext, useState } from 'react';

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState();

  const research = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ search, research }}>
      {children}
    </SearchContext.Provider>
  );
}
