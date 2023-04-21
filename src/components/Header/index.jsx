import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchContext } from '../../contexts/Search/SearchContext';

export default function Header() {
  const { research } = useContext(SearchContext);
  const [blackHeader, setBlackHeader] = useState(false);
  const [hideHeaderPart, setHideHeaderPart] = useState(false);
  const [searchInput, setSearchInput] = useState('');
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

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      research(searchInput);
      navigate('/search');
    }
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClickClearIcon = () => {
    setSearchInput('');
  };

  return (
    <header className={blackHeader ? 'fillBackground' : ''}>
      <div className="site_name">
        <Link to="/">Fullflix</Link>
      </div>
      <div className={`content_not_in_login ${hideHeaderPart ? 'hidden' : ''}`}>
        <nav className="navigation_menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mylist">Minha lista</Link>
            </li>
          </ul>
        </nav>
        <div className="header_right_side">
          <div className="search_area">
            <div className="search_button" onClick={handleSearch}>
              <SearchIcon />
            </div>
            <div className="search_input_and_delete_button">
              <input
                type="text"
                className="search_input"
                placeholder="Pesquisar"
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={handleSearch}
              />
              <div className="clear_icon" onClick={handleClickClearIcon}>
                {searchInput.length > 0 && (
                  <ClearIcon
                    style={{
                      fontSize: '1.2rem',
                      color: '#444',
                      cursor: 'default',
                    }}
                  />
                )}
              </div>
            </div>
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
      </div>
    </header>
  );
}
