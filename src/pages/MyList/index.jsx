import { useContext } from 'react';

import Modal from '../../components/Modal';
import Movie from '../../components/Movie';
import { ModalContext } from '../../contexts/Modal/ModalContext';
import { useGetMyList } from '../../hooks/myList';

import './styles.css';

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
      {!myList.length && (
        <div className="no_list">
          Nenhum conteúdo está adicionado à sua lista.
        </div>
      )}
    </div>
  );
}
