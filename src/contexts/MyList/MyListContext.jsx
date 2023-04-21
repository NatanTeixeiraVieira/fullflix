// import { createContext, useEffect, useState } from 'react';

// export const MyListContext = createContext();

// export function MyListContextProvider({ children }) {
//   const [prevList, setPrevlist] = useState([]);

//   useEffect(() => {
//     setPrevlist(JSON.parse(localStorage.getItem('myList')) ?? []);
//   }, []);

//   const addMovieToMyList = (movieId) => {
//     localStorage.setItem('myList', JSON.stringify([...prevList, movieId]));
//     setPrevlist(JSON.parse(localStorage.getItem('myList')));
//     // setMyListIds((prev) => [...prev, movieId]);
//   };

//   return (
//     // eslint-disable-next-line react/jsx-no-constructed-context-values
//     <MyListContext.Provider value={{ addMovieToMyList }}>
//       {children}
//     </MyListContext.Provider>
//   );
// }
