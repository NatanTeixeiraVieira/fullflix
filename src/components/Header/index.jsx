import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchContext } from '../../contexts/Search/SearchContext';

export default function Header() {
  const { research } = useContext(SearchContext);
  const [blackHeader, setBlackHeader] = useState(false);
  const [hideHeaderPart, setHideHeaderPart] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    if (pathname === '/login' || pathname.includes('/signup')) {
      setHideHeaderPart(true);
    }

    return () => {
      setHideHeaderPart(false);
    };
  }, [pathname]);

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

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className={blackHeader && 'fillBackground'}>
      <div className="site_name">
        <Link to="/">Fullflix</Link>
      </div>
      <div
        className={`content_not_in_login ${hideHeaderPart && 'hidden'}`}
        style={{ right: showMenu ? '0' : '-300px' }}
      >
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
          {(pathname === '/' || pathname === '/search') && (
            <div
              className="search_area"
              style={{ display: showMenu && 'none' }}
            >
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
          )}

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
          <div
            className={`menu_lines ${showMenu && 'menu_lines_animation'}`}
            onClick={handleShowMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}
