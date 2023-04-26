import { createContext, useMemo, useState } from 'react';

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState();

  const research = (searchValue) => {
    setSearch(searchValue);
  };

  const value = useMemo(() => ({ search, research }), [search]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
