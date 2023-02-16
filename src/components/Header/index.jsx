import { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './styles.css';

export default function Header() {
  const [scrollY, setScrollY] = useState(false);
  const scrollMove = () => {
    if (window.scrollY > 10) {
      setScrollY(true);
      return;
    }
    setScrollY(false);
  };
  window.addEventListener('scroll', scrollMove);
  return (
    <header className={scrollY ? 'fillBackground' : ''}>
      <div className="site_name">
        <a href="/">Fullflix</a>
      </div>
      <AccountCircleIcon
        style={{
          fontSize: '3rem',
          color: '#fff',
          backgroundColor: '#141414',
          borderRadius: 100,
          cursor: 'pointer',
        }}
      />
    </header>
  );
}
