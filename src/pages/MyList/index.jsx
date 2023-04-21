import { useContext } from 'react';
import Movie from '../../components/Movie';

import './style.css';
import { useGetMyList } from '../../hooks/myList';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import Modal from '../../components/Modal';

export default function MyList() {
  const { modalIsOpen } = useContext(ModalContext);

  const myList = useGetMyList();

  return (
    <div className="my_list">
      <div className="movies">
        {myList.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
        {modalIsOpen && <Modal />}
      </div>
    </div>
  );
}
