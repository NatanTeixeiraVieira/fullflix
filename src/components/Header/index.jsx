import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';
import { SearchContext } from '../../contexts/Search/SearchContext';

export default function Header() {
  const { research } = useContext(SearchContext);
  const [blackHeader, setBlackHeader] = useState(false);
  const [hideHeaderPart, setHideHeaderPart] = useState(false);
  const searchInputRef = useRef();
  const navigate = useNavigate();

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

  const handleSearch = () => {
    research(searchInputRef.current.value);
    navigate('/search');
  };

  return (
    <header className={blackHeader ? 'fillBackground' : ''}>
      <div className="site_name">
        <Link to="/">Fullflix</Link>
      </div>
      <div className={`content_not_in_login ${hideHeaderPart ? 'hidden' : ''}`}>
        <div className="search_area">
          <div className="search_button" onClick={handleSearch}>
            <SearchIcon />
          </div>
          <input
            type="text"
            className="search_input"
            placeholder="Pesquisar"
            ref={searchInputRef}
          />
        </div>
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
