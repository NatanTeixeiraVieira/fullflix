import { useContext } from 'react';
import { SignupContext } from '../../contexts/Signup/SignupContext';

export default function Tr({ description, basic, standard, premium }) {
  const { plan } = useContext(SignupContext);
  return (
    <tr>
      <td className="table-description">{description}</td>
      <td
        className="table-basic"
        style={plan === 'basic' ? { color: '#e50914' } : { color: 'grey' }}
      >
        {basic}
      </td>
      <td
        className="table-standard"
        style={plan === 'standard' ? { color: '#e50914' } : { color: 'grey' }}
      >
        {standard}
      </td>
      <td
        className="table-premium"
        style={plan === 'premium' ? { color: '#e50914' } : { color: 'grey' }}
      >
        {premium}
      </td>
    </tr>
  );
}
