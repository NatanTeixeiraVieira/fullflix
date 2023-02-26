import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header({ scrollY, display = 'block' }) {
  return (
    <header className={scrollY ? 'fillBackground' : ''}>
      <div className="site_name">
        <Link to="/">Fullflix</Link>
      </div>
      <AccountCircleIcon
        style={{
          fontSize: '3rem',
          color: '#fff',
          backgroundColor: '#141414',
          borderRadius: 100,
          cursor: 'pointer',
          display: `${display}`,
        }}
      />
    </header>
  );
}
