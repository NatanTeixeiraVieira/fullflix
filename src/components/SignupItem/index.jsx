import { Link } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CheckIcon from '@mui/icons-material/Check';
import './styles.css';

export default function SignupItem({ title, description, icon, path, active }) {
  return (
    <div className="signup_item_steps">
      <Link to={path}>
        <div className="title_and_description">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div
          className="icon_area"
          style={
            active
              ? { backgroundColor: '#e50914' }
              : { backgroundColor: 'grey' }
          }
        >
          {icon === 'plans' && <LiveTvIcon />}
          {icon === 'register' && <AppRegistrationIcon />}
          {icon === 'confirmation' && <CheckIcon />}
        </div>
        <div
          className="point"
          style={
            active
              ? { backgroundColor: '#e50914' }
              : { backgroundColor: '#111' }
          }
        />
      </Link>
    </div>
  );
}
