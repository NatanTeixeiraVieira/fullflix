import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './styles.css';

export default function Header({ scrollY }) {
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
