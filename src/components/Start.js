import '../styles/Start.css';
import logo from '../images/logo.png';
import Button from './Button';

const Start = ({ next }) => (
  <div className='container start-container'>
    <header>
      <img alt='The Chick Flick Picker' src={logo} />
      <p>Find the perfect girly film to watch just for you</p>
      <Button onClick={next}>Let's Begin!</Button>
    </header>
    <footer>
      Created by{' '}
      <a
        href='http://www.natalieayuba.com'
        target='_blank'
        rel='noreferrer noopener'
      >
        Natalie Ayuba
      </a>
    </footer>
  </div>
);
export default Start;
