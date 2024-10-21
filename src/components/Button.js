import '../styles/Button.css';
import border from '../images/button-border.svg';

const Button = ({ children, className, ...rest }) => (
  <button className={`button ${className}`} type='button' {...rest}>
    <img alt='Button border' src={border} />
    {children}
  </button>
);

export default Button;
