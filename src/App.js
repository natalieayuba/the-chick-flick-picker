import './App.css';
import logo from './images/logo.png';
import Button from './components/Button';

const App = () => (
  <div className='container'>
    <header>
      <img alt='The Chick Flick Picker' src={logo} />
      <p>Find the perfect girly film to watch just for you</p>
      <Button>Let's Begin!</Button>
    </header>
  </div>
);

export default App;
