import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [hideHeaderPart, setHideHeaderPart] = useState(false);

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

  useEffect(() => {
    const page = window.location.pathname;
    if (page.includes('/login') || page.includes('/signup')) {
      setHideHeaderPart(true);
    }

    return () => {
      setHideHeaderPart(false);
    };
  }, []);

  return (
    <header className={blackHeader ? 'fillBackground' : ''}>
      <div className="site_name">
        <Link to="/">Fullflix</Link>
      </div>
      <div className={`content_not_in_login ${hideHeaderPart ? 'hidden' : ''}`}>
        <Link to="/account">
          <AccountCircleIcon
            style={{
              fontSize: '3rem',
              color: '#fff',
              backgroundColor: '#141414',
              borderRadius: 100,
              cursor: 'pointer',
            }}
          />
        </Link>
      </div>
    </header>
  );
}
