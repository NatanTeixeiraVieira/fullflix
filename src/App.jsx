import Home from './pages/Home/index';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header display="none" />
      <Login />
      {/* <Home />; */}
    </>
  );
}
