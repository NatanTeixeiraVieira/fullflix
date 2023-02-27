import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContext } from '../../contexts/Header/HeaderContext';
import './styles.css';

export default function Header() {
  const { hidden } = useContext(HeaderContext);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollMove = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
        return;
      }
      setBlackHeader(false);
    };
    window.addEventListener('scroll', scrollMove);

    return () => {
      window.removeEventListener('scroll', scrollMove);
    };
  }, []);

  return (
    <header className={blackHeader && 'fillBackground'}>
      <div className="site_name">
        <Link to="/">Fullflix</Link>
      </div>
      <div className={`content_not_in_login ${hidden && 'hidden'}`}>
        <AccountCircleIcon
          style={{
            fontSize: '3rem',
            color: '#fff',
            backgroundColor: '#141414',
            borderRadius: 100,
            cursor: 'pointer',
          }}
        />
      </div>
    </header>
  );
}
